import { IData, IPoint, IRequest } from '../../../types';
import { SET_REQUESTS, SET_POLYLINE_BETWEEN_MARKERS, SET_ACTIVE_REQUEST } from './actions';
import { type LatLngExpression, } from 'leaflet';

interface RequestState {
  requests: IData[];
  points: IPoint[],
  polylineBetweenMarkers: LatLngExpression[];
  activeRequest: IRequest;
}

export interface RequestAction {
  type: string;
  payload: any;
}

const INITIAL_STATE: RequestState = {
  requests: [
    {
        id: 1,
        fromPointId: 1,
        toPointId: 3
      },
      {
        id: 2,
        fromPointId: 5,
        toPointId: 4
      },
      {
        id: 3,
        fromPointId: 2,
        toPointId: 5
      }
  ],
  points: [
    {
      id: 1,
      name: 'Точка 1',
      position: [59.84660399, 30.294996392]
    },
    {
      id: 2,
      name: 'Точка 2',
      position: [59.82934196, 30.42423701]
    },
    {
      id: 3,
      name: 'Точка 3',
      position: [59.83567701, 30.38064206]
    },
    {
      id: 4,
      name: 'Точка 4',
      position: [59.84660399, 30.29496392]
    },
    {
      id: 5,
      name: 'Точка 5',
      position: [59.83567701, 30.38064206]
    }
  ],
  polylineBetweenMarkers: [],
  activeRequest: {
    id: 0,
    from: [0, 0],
    to: [0, 0]
  },
};

export default (state = INITIAL_STATE , { type, payload }: RequestAction) => {
  switch (type) {
    case SET_REQUESTS:
      return {...state, requests: payload}
    case SET_ACTIVE_REQUEST:
      return {...state, activeRequest: payload}
    case SET_POLYLINE_BETWEEN_MARKERS:
      return {...state, polylineBetweenMarkers: payload}
    default:
      return state;
  }
};
