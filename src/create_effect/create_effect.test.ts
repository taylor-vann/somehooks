/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createEffect} from './create_effect';

type EffectState = 'uninitialized'|'initialized'|'affected';

let affected: EffectState = 'uninitialized';

describe('createCallback', () => {
  beforeEach(() => {
    affected = 'uninitialized';
  });


  it('returns "affected" with no arguments', () => {
    const useEffect = createEffect();

    const callUseEffect = () => {
      useEffect(() => {
        return () => {
          affected = 'affected';
        };
      });
    };

    callUseEffect();
    expect(affected).toBe('uninitialized');

    callUseEffect();
    expect(affected).toBe('affected');
  });

  it('returns "initialized" with empty arguments', () => {
    const useEffect = createEffect();
    const callUseEffect = () => {
      useEffect(() => {
        affected = 'initialized';
        return () => {
          affected = 'affected';
        };
      }, []);
    };

    callUseEffect();
    expect(affected).toBe('initialized');

    callUseEffect();
    expect(affected).toBe('initialized');
  });

  it('returns "initialized" with similar arguments', () => {
    const useEffect = createEffect();
    const callUseEffect = (changes: unknown[]) => {
      useEffect(() => {
        affected = 'initialized';
        return () => {
          affected = 'affected';
        };
      }, changes);
    };

    callUseEffect(['hello', 'wonderful!']);
    expect(affected).toBe('initialized');

    callUseEffect(['hello', 'wonderful!']);
    expect(affected).toBe('initialized');
  });

  it('returns "affected" with unsimilar arguments', () => {
    const useEffect = createEffect();
    const callUseEffect = (changes: unknown[]) => {
      useEffect(() => {
        return () => {
          affected = 'affected';
        };
      }, changes);
    };

    callUseEffect(['hello', 'wonderful', '!']);
    expect(affected).toBe('uninitialized');

    callUseEffect(['how', 'is', 'your', 'day', '?']);
    expect(affected).toBe('affected');
  });
});
