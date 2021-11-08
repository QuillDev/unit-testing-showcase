import {processJSONOld} from "../src/untested/processJSON.old"
import {processJSONNew} from "../src/tested/processJSON.new";

describe("old", () => {
    test("Parses and gets json string when valid json is supplied", () => {
        expect(processJSONOld('{"test": "valid"}')).toBe(`{\n  "test": "valid"\n}`)
    })

    test("Try to parse invalid json data and return 'invalid json data submitted'", () => {
        expect(processJSONOld("{invalid_json}")).toBe(`invalid json submitted`)
    })
})

describe(("new"), () => {
    test("Parses and gets json string when valid json is supplied", () => {
        expect(processJSONNew('{"test": "valid"}')).toBe(`{\n  "test": "valid"\n}`)
    })

    test("Try to parse invalid json data and return 'invalid json data submitted'", () => {
        expect(processJSONNew("{invalid_json}")).toBe(`invalid json submitted`)
    })
})
