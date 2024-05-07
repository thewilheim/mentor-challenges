import {expect, test} from "bun:test"
import { pascalsTriangle } from '.'

test("Given an integer numRows, return the first numRows of Pascal's triangle.", () => {
    expect(pascalsTriangle(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
})