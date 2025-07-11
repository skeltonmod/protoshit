
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const PYCHARM_VM_OPTIONS: string;
	export const WEBIDE_VM_OPTIONS: string;
	export const MANPATH: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const npm_config__fortawesome_registry: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const PYENV_ROOT: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_config_version_git_tag: string;
	export const TERM: string;
	export const JETBRAINSCLIENT_VM_OPTIONS: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const PHPSTORM_VM_OPTIONS: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const GOLAND_VM_OPTIONS: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const RUSTROVER_VM_OPTIONS: string;
	export const DEVECOSTUDIO_VM_OPTIONS: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const _: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_config__jsplumbtoolkit_registry: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const CLION_VM_OPTIONS: string;
	export const IDEA_VM_OPTIONS: string;
	export const LANG: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_name: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const WEBSTORM_VM_OPTIONS: string;
	export const npm_config_bin_links: string;
	export const DATASPELL_VM_OPTIONS: string;
	export const AQUA_VM_OPTIONS: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const SHLVL: string;
	export const HOME: string;
	export const STUDIO_VM_OPTIONS: string;
	export const PYENV_SHELL: string;
	export const npm_package_type: string;
	export const TERMINFO: string;
	export const GHOSTTY_SHELL_INTEGRATION_NO_SUDO: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const SDKMAN_DIR: string;
	export const npm_lifecycle_script: string;
	export const XDG_DATA_DIRS: string;
	export const GATEWAY_VM_OPTIONS: string;
	export const GHOSTTY_BIN_DIR: string;
	export const DATAGRIP_VM_OPTIONS: string;
	export const NVM_BIN: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const npm_package_dependencies_clsx: string;
	export const npm_config__awesome_me_registry: string;
	export const RIDER_VM_OPTIONS: string;
	export const JETBRAINS_CLIENT_VM_OPTIONS: string;
	export const RUBYMINE_VM_OPTIONS: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_config__changegps_registry: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		PYCHARM_VM_OPTIONS: string;
		WEBIDE_VM_OPTIONS: string;
		MANPATH: string;
		GHOSTTY_RESOURCES_DIR: string;
		TERM_PROGRAM: string;
		NODE: string;
		npm_config__fortawesome_registry: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		PYENV_ROOT: string;
		npm_package_devDependencies_typescript: string;
		npm_config_version_git_tag: string;
		TERM: string;
		JETBRAINSCLIENT_VM_OPTIONS: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_dependencies_lucide_svelte: string;
		SDKMAN_PLATFORM: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		npm_package_readmeFilename: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		SDKMAN_CANDIDATES_API: string;
		PHPSTORM_VM_OPTIONS: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		GOLAND_VM_OPTIONS: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies_tailwind_merge: string;
		RUSTROVER_VM_OPTIONS: string;
		DEVECOSTUDIO_VM_OPTIONS: string;
		PATH: string;
		npm_config_argv: string;
		_: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_config__jsplumbtoolkit_registry: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		CLION_VM_OPTIONS: string;
		IDEA_VM_OPTIONS: string;
		LANG: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_name: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		WEBSTORM_VM_OPTIONS: string;
		npm_config_bin_links: string;
		DATASPELL_VM_OPTIONS: string;
		AQUA_VM_OPTIONS: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		SHLVL: string;
		HOME: string;
		STUDIO_VM_OPTIONS: string;
		PYENV_SHELL: string;
		npm_package_type: string;
		TERMINFO: string;
		GHOSTTY_SHELL_INTEGRATION_NO_SUDO: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		SDKMAN_DIR: string;
		npm_lifecycle_script: string;
		XDG_DATA_DIRS: string;
		GATEWAY_VM_OPTIONS: string;
		GHOSTTY_BIN_DIR: string;
		DATAGRIP_VM_OPTIONS: string;
		NVM_BIN: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		SDKMAN_CANDIDATES_DIR: string;
		npm_package_dependencies_clsx: string;
		npm_config__awesome_me_registry: string;
		RIDER_VM_OPTIONS: string;
		JETBRAINS_CLIENT_VM_OPTIONS: string;
		RUBYMINE_VM_OPTIONS: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_config__changegps_registry: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
