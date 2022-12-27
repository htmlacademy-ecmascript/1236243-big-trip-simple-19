import {getMockPoints} from '../mock/point.js'

export default class PointsModel {
    points = getMockPoints()

    getPoints() {
        return this.points
    }
}