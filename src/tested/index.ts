import prompts from "prompts";
import {processJSONNew} from "./processJSON.new"

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Enter some JSON Data!'
    });

    console.log(`Your data pretty printed is \n${processJSONNew(response.value)}`)
})()

