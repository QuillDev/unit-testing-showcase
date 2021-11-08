import prompts from "prompts";
import {processJSONOld} from "./processJSON.old"

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Enter some JSON Data!'
    });

    console.log(`Your data pretty printed is \n${processJSONOld(response.value)}`)
})()

