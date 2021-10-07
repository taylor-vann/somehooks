/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

type RequestState<S> = () => S;
type Comparator<R> = (setA: R, setB: R) => boolean;

type Selector<S, R> = (state: S) => R;
type UpdateSelection<S, R> =
    (getSelection: Selector<S, R>, comparator?: Comparator<R>) => R;
type CreateSelector = <S, R>(requestUpdate: RequestState<S>) =>
    UpdateSelection<S, R>;

const createSelector: CreateSelector = <S, R>(
    requestState: RequestState<S>) => {
  let selection: R;

  const updateSelection: UpdateSelection<S, R> = (selector, comparator) => {
    const selectionDelta = selector(requestState());
    if (comparator === undefined && selection !== selectionDelta) {
      selection = selectionDelta;
    }

    if (comparator !== undefined && !comparator(selection, selectionDelta)) {
      selection = selectionDelta;
    }

    return selection;
  };

  return updateSelection;
};

export type{Comparator, Selector};

export {createSelector};
