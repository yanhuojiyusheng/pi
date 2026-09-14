import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { COMMAND_CODE_MODELS } from "./command-code.models.ts";

export function commandCodeProvider(): Provider<"openai-completions"> {
	return createProvider({
		id: "command-code",
		name: "Command Code",
		baseUrl: "https://api.commandcode.ai/provider/v1",
		auth: { apiKey: envApiKeyAuth("Command Code API key", ["COMMAND_CODE_API_KEY"]) },
		models: Object.values(COMMAND_CODE_MODELS),
		api: openAICompletionsApi(),
	});
}
