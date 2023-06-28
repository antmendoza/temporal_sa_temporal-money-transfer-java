import { c as create_ssr_component, b as subscribe, v as validate_component, d as each, f as add_attribute, e as escape, g as add_classes, h as compute_rest_props, m as missing_component } from './index2-ffc829c8.js';
import { p as page } from './stores-7d4a68fe.js';
import require$$0 from 'tty';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var colors$1 = {};

var log = {};

var picocolors = {exports: {}};

var hasRequiredPicocolors;

function requirePicocolors () {
	if (hasRequiredPicocolors) return picocolors.exports;
	hasRequiredPicocolors = 1;
	let tty = require$$0;

	let isColorSupported =
		!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
		("FORCE_COLOR" in process.env ||
			process.argv.includes("--color") ||
			process.platform === "win32" ||
			(tty.isatty(1) && process.env.TERM !== "dumb") ||
			"CI" in process.env);

	let formatter =
		(open, close, replace = open) =>
		input => {
			let string = "" + input;
			let index = string.indexOf(close, open.length);
			return ~index
				? open + replaceClose(string, close, replace, index) + close
				: open + string + close
		};

	let replaceClose = (string, close, replace, index) => {
		let start = string.substring(0, index) + replace;
		let end = string.substring(index + close.length);
		let nextIndex = end.indexOf(close);
		return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
	};

	let createColors = (enabled = isColorSupported) => ({
		isColorSupported: enabled,
		reset: enabled ? s => `\x1b[0m${s}\x1b[0m` : String,
		bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
		dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
		italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
		underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
		inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
		hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
		strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
		black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
		red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
		green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
		yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
		blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
		magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
		cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
		white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
		gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
		bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
		bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
		bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
		bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
		bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
		bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
		bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
		bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
	});

	picocolors.exports = createColors();
	picocolors.exports.createColors = createColors;
	return picocolors.exports;
}

var hasRequiredLog;

function requireLog () {
	if (hasRequiredLog) return log;
	hasRequiredLog = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    dim: function() {
		        return dim;
		    },
		    default: function() {
		        return _default;
		    }
		});
		const _picocolors = /*#__PURE__*/ _interop_require_default(requirePicocolors());
		function _interop_require_default(obj) {
		    return obj && obj.__esModule ? obj : {
		        default: obj
		    };
		}
		let alreadyShown = new Set();
		function log(type, messages, key) {
		    if (typeof process !== "undefined" && process.env.JEST_WORKER_ID) return;
		    if (key && alreadyShown.has(key)) return;
		    if (key) alreadyShown.add(key);
		    console.warn("");
		    messages.forEach((message)=>console.warn(type, "-", message));
		}
		function dim(input) {
		    return _picocolors.default.dim(input);
		}
		const _default = {
		    info (key, messages) {
		        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
		            key
		        ] : [
		            messages,
		            key
		        ]);
		    },
		    warn (key, messages) {
		        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
		            key
		        ] : [
		            messages,
		            key
		        ]);
		    },
		    risk (key, messages) {
		        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
		            key
		        ] : [
		            messages,
		            key
		        ]);
		    }
		}; 
	} (log));
	return log;
}

var hasRequiredColors$1;

function requireColors$1 () {
	if (hasRequiredColors$1) return colors$1;
	hasRequiredColors$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "default", {
		    enumerable: true,
		    get: function() {
		        return _default;
		    }
		});
		const _log = /*#__PURE__*/ _interop_require_default(requireLog());
		function _interop_require_default(obj) {
		    return obj && obj.__esModule ? obj : {
		        default: obj
		    };
		}
		function warn({ version , from , to  }) {
		    _log.default.warn(`${from}-color-renamed`, [
		        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
		        "Update your configuration file to silence this warning."
		    ]);
		}
		const _default = {
		    inherit: "inherit",
		    current: "currentColor",
		    transparent: "transparent",
		    black: "#000",
		    white: "#fff",
		    slate: {
		        50: "#f8fafc",
		        100: "#f1f5f9",
		        200: "#e2e8f0",
		        300: "#cbd5e1",
		        400: "#94a3b8",
		        500: "#64748b",
		        600: "#475569",
		        700: "#334155",
		        800: "#1e293b",
		        900: "#0f172a",
		        950: "#020617"
		    },
		    gray: {
		        50: "#f9fafb",
		        100: "#f3f4f6",
		        200: "#e5e7eb",
		        300: "#d1d5db",
		        400: "#9ca3af",
		        500: "#6b7280",
		        600: "#4b5563",
		        700: "#374151",
		        800: "#1f2937",
		        900: "#111827",
		        950: "#030712"
		    },
		    zinc: {
		        50: "#fafafa",
		        100: "#f4f4f5",
		        200: "#e4e4e7",
		        300: "#d4d4d8",
		        400: "#a1a1aa",
		        500: "#71717a",
		        600: "#52525b",
		        700: "#3f3f46",
		        800: "#27272a",
		        900: "#18181b",
		        950: "#09090b"
		    },
		    neutral: {
		        50: "#fafafa",
		        100: "#f5f5f5",
		        200: "#e5e5e5",
		        300: "#d4d4d4",
		        400: "#a3a3a3",
		        500: "#737373",
		        600: "#525252",
		        700: "#404040",
		        800: "#262626",
		        900: "#171717",
		        950: "#0a0a0a"
		    },
		    stone: {
		        50: "#fafaf9",
		        100: "#f5f5f4",
		        200: "#e7e5e4",
		        300: "#d6d3d1",
		        400: "#a8a29e",
		        500: "#78716c",
		        600: "#57534e",
		        700: "#44403c",
		        800: "#292524",
		        900: "#1c1917",
		        950: "#0c0a09"
		    },
		    red: {
		        50: "#fef2f2",
		        100: "#fee2e2",
		        200: "#fecaca",
		        300: "#fca5a5",
		        400: "#f87171",
		        500: "#ef4444",
		        600: "#dc2626",
		        700: "#b91c1c",
		        800: "#991b1b",
		        900: "#7f1d1d",
		        950: "#450a0a"
		    },
		    orange: {
		        50: "#fff7ed",
		        100: "#ffedd5",
		        200: "#fed7aa",
		        300: "#fdba74",
		        400: "#fb923c",
		        500: "#f97316",
		        600: "#ea580c",
		        700: "#c2410c",
		        800: "#9a3412",
		        900: "#7c2d12",
		        950: "#431407"
		    },
		    amber: {
		        50: "#fffbeb",
		        100: "#fef3c7",
		        200: "#fde68a",
		        300: "#fcd34d",
		        400: "#fbbf24",
		        500: "#f59e0b",
		        600: "#d97706",
		        700: "#b45309",
		        800: "#92400e",
		        900: "#78350f",
		        950: "#451a03"
		    },
		    yellow: {
		        50: "#fefce8",
		        100: "#fef9c3",
		        200: "#fef08a",
		        300: "#fde047",
		        400: "#facc15",
		        500: "#eab308",
		        600: "#ca8a04",
		        700: "#a16207",
		        800: "#854d0e",
		        900: "#713f12",
		        950: "#422006"
		    },
		    lime: {
		        50: "#f7fee7",
		        100: "#ecfccb",
		        200: "#d9f99d",
		        300: "#bef264",
		        400: "#a3e635",
		        500: "#84cc16",
		        600: "#65a30d",
		        700: "#4d7c0f",
		        800: "#3f6212",
		        900: "#365314",
		        950: "#1a2e05"
		    },
		    green: {
		        50: "#f0fdf4",
		        100: "#dcfce7",
		        200: "#bbf7d0",
		        300: "#86efac",
		        400: "#4ade80",
		        500: "#22c55e",
		        600: "#16a34a",
		        700: "#15803d",
		        800: "#166534",
		        900: "#14532d",
		        950: "#052e16"
		    },
		    emerald: {
		        50: "#ecfdf5",
		        100: "#d1fae5",
		        200: "#a7f3d0",
		        300: "#6ee7b7",
		        400: "#34d399",
		        500: "#10b981",
		        600: "#059669",
		        700: "#047857",
		        800: "#065f46",
		        900: "#064e3b",
		        950: "#022c22"
		    },
		    teal: {
		        50: "#f0fdfa",
		        100: "#ccfbf1",
		        200: "#99f6e4",
		        300: "#5eead4",
		        400: "#2dd4bf",
		        500: "#14b8a6",
		        600: "#0d9488",
		        700: "#0f766e",
		        800: "#115e59",
		        900: "#134e4a",
		        950: "#042f2e"
		    },
		    cyan: {
		        50: "#ecfeff",
		        100: "#cffafe",
		        200: "#a5f3fc",
		        300: "#67e8f9",
		        400: "#22d3ee",
		        500: "#06b6d4",
		        600: "#0891b2",
		        700: "#0e7490",
		        800: "#155e75",
		        900: "#164e63",
		        950: "#083344"
		    },
		    sky: {
		        50: "#f0f9ff",
		        100: "#e0f2fe",
		        200: "#bae6fd",
		        300: "#7dd3fc",
		        400: "#38bdf8",
		        500: "#0ea5e9",
		        600: "#0284c7",
		        700: "#0369a1",
		        800: "#075985",
		        900: "#0c4a6e",
		        950: "#082f49"
		    },
		    blue: {
		        50: "#eff6ff",
		        100: "#dbeafe",
		        200: "#bfdbfe",
		        300: "#93c5fd",
		        400: "#60a5fa",
		        500: "#3b82f6",
		        600: "#2563eb",
		        700: "#1d4ed8",
		        800: "#1e40af",
		        900: "#1e3a8a",
		        950: "#172554"
		    },
		    indigo: {
		        50: "#eef2ff",
		        100: "#e0e7ff",
		        200: "#c7d2fe",
		        300: "#a5b4fc",
		        400: "#818cf8",
		        500: "#6366f1",
		        600: "#4f46e5",
		        700: "#4338ca",
		        800: "#3730a3",
		        900: "#312e81",
		        950: "#1e1b4b"
		    },
		    violet: {
		        50: "#f5f3ff",
		        100: "#ede9fe",
		        200: "#ddd6fe",
		        300: "#c4b5fd",
		        400: "#a78bfa",
		        500: "#8b5cf6",
		        600: "#7c3aed",
		        700: "#6d28d9",
		        800: "#5b21b6",
		        900: "#4c1d95",
		        950: "#2e1065"
		    },
		    purple: {
		        50: "#faf5ff",
		        100: "#f3e8ff",
		        200: "#e9d5ff",
		        300: "#d8b4fe",
		        400: "#c084fc",
		        500: "#a855f7",
		        600: "#9333ea",
		        700: "#7e22ce",
		        800: "#6b21a8",
		        900: "#581c87",
		        950: "#3b0764"
		    },
		    fuchsia: {
		        50: "#fdf4ff",
		        100: "#fae8ff",
		        200: "#f5d0fe",
		        300: "#f0abfc",
		        400: "#e879f9",
		        500: "#d946ef",
		        600: "#c026d3",
		        700: "#a21caf",
		        800: "#86198f",
		        900: "#701a75",
		        950: "#4a044e"
		    },
		    pink: {
		        50: "#fdf2f8",
		        100: "#fce7f3",
		        200: "#fbcfe8",
		        300: "#f9a8d4",
		        400: "#f472b6",
		        500: "#ec4899",
		        600: "#db2777",
		        700: "#be185d",
		        800: "#9d174d",
		        900: "#831843",
		        950: "#500724"
		    },
		    rose: {
		        50: "#fff1f2",
		        100: "#ffe4e6",
		        200: "#fecdd3",
		        300: "#fda4af",
		        400: "#fb7185",
		        500: "#f43f5e",
		        600: "#e11d48",
		        700: "#be123c",
		        800: "#9f1239",
		        900: "#881337",
		        950: "#4c0519"
		    },
		    get lightBlue () {
		        warn({
		            version: "v2.2",
		            from: "lightBlue",
		            to: "sky"
		        });
		        return this.sky;
		    },
		    get warmGray () {
		        warn({
		            version: "v3.0",
		            from: "warmGray",
		            to: "stone"
		        });
		        return this.stone;
		    },
		    get trueGray () {
		        warn({
		            version: "v3.0",
		            from: "trueGray",
		            to: "neutral"
		        });
		        return this.neutral;
		    },
		    get coolGray () {
		        warn({
		            version: "v3.0",
		            from: "coolGray",
		            to: "gray"
		        });
		        return this.gray;
		    },
		    get blueGray () {
		        warn({
		            version: "v3.0",
		            from: "blueGray",
		            to: "slate"
		        });
		        return this.slate;
		    }
		}; 
	} (colors$1));
	return colors$1;
}

var colors_1;
var hasRequiredColors;

function requireColors () {
	if (hasRequiredColors) return colors_1;
	hasRequiredColors = 1;
	let colors = requireColors$1();
	colors_1 = (colors.__esModule ? colors : { default: colors }).default;
	return colors_1;
}

var colorsExports = requireColors();
var colors = /*@__PURE__*/getDefaultExportFromCjs(colorsExports);

const css$1 = {
  code: ".beta.svelte-1ub5728,.running.svelte-1ub5728,.blue.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(29 78 216 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity))\n}.alpha.svelte-1ub5728,.purple.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(126 34 206 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(243 232 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity))\n}.error.svelte-1ub5728,.red.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(185 28 28 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 242 242 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity))\n}.warning.svelte-1ub5728,.yellow.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(113 63 18 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 249 195 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(113 63 18 / var(--tw-text-opacity))\n}.default.svelte-1ub5728,.gray.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(24 24 27 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(244 244 245 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(24 24 27 / var(--tw-text-opacity))\n}.active.svelte-1ub5728,.available.svelte-1ub5728,.green.svelte-1ub5728{--tw-border-opacity:1;border-color:rgb(21 128 61 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(220 252 231 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(21 128 61 / var(--tw-text-opacity))\n}.count.svelte-1ub5728{height:1.5rem;width:1.5rem;min-width:-moz-max-content;min-width:max-content;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "default" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div class="${escape(type, true) + " flex w-fit flex-row items-center justify-center break-all rounded-sm p-1 text-sm font-medium transition-colors " + escape($$props.class, true) + " svelte-1ub5728"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Logo = "/_app/immutable/assets/Temporal_Logo_Animation.ac2f7996.gif";
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Loading…" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"my-12 flex flex-col items-center justify-start " + escape($$props.class, true)}"><img${add_attribute("src", Logo, 0)} style="margin-top: -40px;" alt="Temporal Logo" width="200px" height="200px">
  <h2 class="text-xl font-medium" style="margin-top: -40px;">${escape(title)}</h2></div>`;
});
const banner = "/_app/immutable/assets/banner.1e0667a3.png";
const manifest = "data:application/manifest+json;base64,ewogICJuYW1lIjogIlRlbXBvcmFsIFdlYiBVSSIsCiAgInNob3J0X25hbWUiOiAiVGVtcG9yYWwiLAogICJpY29ucyI6IFsKICAgIHsKICAgICAgInNyYyI6ICIuL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nIiwKICAgICAgInNpemVzIjogIjE5MngxOTIiLAogICAgICAidHlwZSI6ICJpbWFnZS9wbmciCiAgICB9LAogICAgewogICAgICAic3JjIjogIi4vYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmciLAogICAgICAic2l6ZXMiOiAiNTEyeDUxMiIsCiAgICAgICJ0eXBlIjogImltYWdlL3BuZyIKICAgIH0KICBdLAogICJ0aGVtZV9jb2xvciI6ICIjZmZmZmZmIiwKICAiYmFja2dyb3VuZF9jb2xvciI6ICIjZmZmZmZmIiwKICAiZGlzcGxheSI6ICJzdGFuZGFsb25lIgp9Cg==";
const favicon = "/_app/immutable/assets/favicon.54bd878e.ico";
const apple = "/_app/immutable/assets/apple-touch-icon.8685d9e4.png";
const Page_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Temporal" } = $$props;
  let { url = "https://temporal.io" } = $$props;
  let { image = banner } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `${$$result.head += `<!-- HEAD_svelte-axg6d6_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="icon"${add_attribute("href", favicon, 0)}><link rel="manifest"${add_attribute("href", manifest, 0)}><link rel="apple-touch-icon"${add_attribute("href", apple, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><!-- HEAD_svelte-axg6d6_END -->`, ""}`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { title = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${add_attribute("class", $$props.class, 0)}><title>${escape(title)}</title>${slots.default ? slots.default({}) : ``}</svg>`;
});
const Add = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M18.5 12C18.5 12.2812 18.25 12.5 18 12.5H12.5V18C12.5 18.2812 12.25 18.5312 12 18.5312C11.7188 18.5312 11.5 18.2812 11.5 18V12.5H6C5.71875 12.5 5.5 12.2812 5.5 12.0312C5.5 11.75 5.71875 11.5 6 11.5H11.5V6C11.5 5.75 11.7188 5.53125 12 5.53125C12.25 5.53125 12.5 5.75 12.5 6V11.5H18C18.25 11.5 18.5 11.75 18.5 12Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Archives = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9 12H15" stroke="currentcolor"></path>
  <path d="M4 8V7.5H3.5V8H4ZM20 8H20.5V7.5H20V8ZM5.09202 19.782L5.31901 19.3365L5.09202 19.782ZM4.21799 18.908L4.66349 18.681L4.21799 18.908ZM19.782 18.908L19.3365 18.681L19.782 18.908ZM18.908 19.782L18.681 19.3365L18.908 19.782ZM4 8.5H20V7.5H4V8.5ZM19.5 8V16.8H20.5V8H19.5ZM16.8 19.5H7.2V20.5H16.8V19.5ZM4.5 16.8V8H3.5V16.8H4.5ZM7.2 19.5C6.6317 19.5 6.23554 19.4996 5.92712 19.4744C5.62454 19.4497 5.45069 19.4036 5.31901 19.3365L4.86502 20.2275C5.16117 20.3784 5.48126 20.4413 5.84569 20.4711C6.20428 20.5004 6.6482 20.5 7.2 20.5V19.5ZM3.5 16.8C3.5 17.3518 3.49961 17.7957 3.52891 18.1543C3.55868 18.5187 3.62159 18.8388 3.77248 19.135L4.66349 18.681C4.5964 18.5493 4.55031 18.3755 4.52559 18.0729C4.50039 17.7645 4.5 17.3683 4.5 16.8H3.5ZM5.31901 19.3365C5.03677 19.1927 4.8073 18.9632 4.66349 18.681L3.77248 19.135C4.01217 19.6054 4.39462 19.9878 4.86502 20.2275L5.31901 19.3365ZM19.5 16.8C19.5 17.3683 19.4996 17.7645 19.4744 18.0729C19.4497 18.3755 19.4036 18.5493 19.3365 18.681L20.2275 19.135C20.3784 18.8388 20.4413 18.5187 20.4711 18.1543C20.5004 17.7957 20.5 17.3518 20.5 16.8H19.5ZM16.8 20.5C17.3518 20.5 17.7957 20.5004 18.1543 20.4711C18.5187 20.4413 18.8388 20.3784 19.135 20.2275L18.681 19.3365C18.5493 19.4036 18.3755 19.4497 18.0729 19.4744C17.7645 19.4996 17.3683 19.5 16.8 19.5V20.5ZM19.3365 18.681C19.1927 18.9632 18.9632 19.1927 18.681 19.3365L19.135 20.2275C19.6054 19.9878 19.9878 19.6054 20.2275 19.135L19.3365 18.681ZM4 4.5H20V3.5H4V4.5ZM21 5.5V7.75H22V5.5H21ZM21.25 7.5H2.75V8.5H21.25V7.5ZM3 7.75V5.5H2V7.75H3ZM2.75 7.5C2.88807 7.5 3 7.61193 3 7.75H2C2 8.16421 2.33579 8.5 2.75 8.5V7.5ZM21 7.75C21 7.61193 21.1119 7.5 21.25 7.5V8.5C21.6642 8.5 22 8.16421 22 7.75H21ZM20 4.5C20.5523 4.5 21 4.94772 21 5.5H22C22 4.39543 21.1046 3.5 20 3.5V4.5ZM4 3.5C2.89543 3.5 2 4.39543 2 5.5H3C3 4.94772 3.44772 4.5 4 4.5V3.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Arrow_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M18.3242 10.9954C18.2188 11.136 18.0781 11.2063 17.9375 11.2063C17.7969 11.2063 17.6562 11.136 17.5508 11.0305L12.3125 6.10864V19.3625C12.3125 19.679 12.0312 19.9602 11.75 19.9602C11.4688 19.9602 11.1875 19.679 11.1875 19.3625V6.10864L5.91406 11.0305C5.70312 11.2415 5.35156 11.2415 5.14062 10.9954C4.92969 10.7493 4.92969 10.3977 5.17578 10.1868L11.3633 4.35083C11.5742 4.13989 11.8906 4.13989 12.1016 4.35083L18.2891 10.1868C18.5352 10.3977 18.5352 10.7493 18.3242 10.9954Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M14.5078 8.36719L17.8828 11.7422C17.9531 11.8125 18 11.9062 18 12C18 12.0703 17.9531 12.1875 17.8828 12.2578L14.5078 15.6328C14.3672 15.7734 14.1094 15.7734 13.9688 15.6328C13.8281 15.4922 13.8281 15.2578 13.9688 15.0938L16.7109 12.375H6.375C6.16406 12.375 6 12.1875 6 12C6 11.8125 6.16406 11.625 6.375 11.625H16.7109L13.9688 8.90625C13.8281 8.76562 13.8281 8.50781 13.9688 8.36719C14.1094 8.22656 14.3672 8.22656 14.5078 8.36719Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Ascending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.2188 13.6562H17.0938C17.2969 13.6562 17.5 13.4785 17.5 13.25C17.5 13.0469 17.2969 12.8438 17.0938 12.8438H12.2188C11.9902 12.8438 11.8125 13.0469 11.8125 13.25C11.8125 13.4785 11.9902 13.6562 12.2188 13.6562ZM12.2188 10.4062H15.4688C15.6719 10.4062 15.875 10.2285 15.875 10C15.875 9.79688 15.6719 9.59375 15.4688 9.59375H12.2188C11.9902 9.59375 11.8125 9.79688 11.8125 10C11.8125 10.2285 11.9902 10.4062 12.2188 10.4062ZM12.2188 7.15625H13.8438C14.0469 7.15625 14.25 6.97852 14.25 6.75C14.25 6.54688 14.0469 6.34375 13.8438 6.34375H12.2188C11.9902 6.34375 11.8125 6.54688 11.8125 6.75C11.8125 6.97852 11.9902 7.15625 12.2188 7.15625ZM18.7188 16.0938H12.2188C11.9902 16.0938 11.8125 16.2969 11.8125 16.5C11.8125 16.7285 11.9902 16.9062 12.2188 16.9062H18.7188C18.9219 16.9062 19.125 16.7285 19.125 16.5C19.125 16.2969 18.9219 16.0938 18.7188 16.0938ZM8.0293 6.06445C7.87695 5.91211 7.59766 5.91211 7.44531 6.06445L5.00781 8.50195C4.85547 8.6543 4.85547 8.93359 5.00781 9.08594C5.16016 9.23828 5.43945 9.23828 5.5918 9.08594L7.34375 7.33398V16.9062C7.34375 17.1348 7.52148 17.3125 7.75 17.3125C7.95312 17.3125 8.15625 17.1348 8.15625 16.9062V7.33398L9.88281 9.08594C9.95898 9.16211 10.0605 9.1875 10.1875 9.1875C10.2891 9.1875 10.3906 9.16211 10.4668 9.08594C10.6191 8.93359 10.6191 8.6543 10.4668 8.50195L8.0293 6.06445Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Book = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M18.8906 6.30859C17.6328 5.87109 16.4297 5.65234 15.3633 5.65234C13.7227 5.65234 12.5742 6.11719 12 6.39062C11.3984 6.11719 10.2227 5.65234 8.60938 5.625C7.51562 5.625 6.3125 5.87109 5.08203 6.30859C4.50781 6.52734 4.125 7.07422 4.125 7.67578V15.9609C4.125 16.3711 4.28906 16.7266 4.61719 16.9727C4.94531 17.1914 5.35547 17.2734 5.73828 17.1641C8.99219 16.1523 11.4531 17.6836 11.5898 17.7656C11.6992 17.8203 11.8086 17.875 11.9727 17.875C12.1367 17.875 12.2461 17.8203 12.3555 17.7656C12.6289 17.5742 15.0352 16.1797 18.207 17.1641C18.5898 17.2734 19 17.1914 19.3281 16.9727C19.6836 16.7266 19.875 16.3711 19.875 15.9609V7.67578C19.875 7.07422 19.4648 6.52734 18.8906 6.30859ZM11.5625 16.7539C10.8789 16.4258 9.59375 15.9336 7.98047 15.9336C7.21484 15.9336 6.39453 16.043 5.49219 16.3164C5.35547 16.3438 5.24609 16.3438 5.13672 16.2617C5.05469 16.1797 5 16.0703 5 15.9609V7.67578C5 7.42969 5.13672 7.21094 5.35547 7.12891C6.50391 6.71875 7.59766 6.5 8.60938 6.5C10.0312 6.52734 11.0703 6.9375 11.5625 7.15625V16.7539ZM19 15.9609C19 16.0703 18.918 16.1797 18.8359 16.2617C18.7266 16.3438 18.6172 16.3438 18.4805 16.3164C15.7188 15.4688 13.4492 16.2617 12.4375 16.7539V7.15625C12.9023 6.9375 13.9414 6.52734 15.3633 6.5C16.3203 6.5 17.4414 6.71875 18.6172 7.12891C18.8359 7.21094 19 7.42969 19 7.67578V15.9609Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Bookmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Calendar_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Canceled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 4C7.5625 4 4 7.59375 4 12C4 16.4375 7.5625 20 12 20C16.4062 20 20 16.4375 20 12C20 7.59375 16.4062 4 12 4ZM6 12C6 10.7188 6.40625 9.53125 7.09375 8.53125L15.4688 16.9062C14.4688 17.5938 13.2812 18 12 18C8.6875 18 6 15.3125 6 12ZM16.875 15.5L8.5 7.125C9.5 6.4375 10.6875 6 12 6C15.2812 6 18 8.71875 18 12C18 13.3125 17.5625 14.5 16.875 15.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentcolor"></path>
  <path d="M8.75 15.25V9.75" stroke="currentcolor"></path>
  <path d="M15.25 15.25V9.75" stroke="currentcolor"></path>
  <path d="M12 15.25V12.75" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.6992 7.60938L10.1367 17.1719C10.0312 17.2773 9.89062 17.3125 9.75 17.3125C9.57422 17.3125 9.43359 17.2773 9.32812 17.1719L4.26562 12.1094C4.05469 11.8984 4.05469 11.5117 4.26562 11.3008C4.47656 11.0898 4.86328 11.0898 5.07422 11.3008L9.75 15.9766L18.8906 6.80078C19.1016 6.58984 19.4883 6.58984 19.6992 6.80078C19.9102 7.01172 19.9102 7.39844 19.6992 7.60938Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M5.11719 9.70703C5.20508 9.58984 5.32227 9.53125 5.46875 9.53125C5.55664 9.53125 5.67383 9.56055 5.76172 9.64844L11.5332 14.9512L17.334 9.64844C17.5098 9.47266 17.8027 9.47266 17.9785 9.67773C18.1543 9.85352 18.1543 10.1465 17.9492 10.3223L11.8555 15.9473C11.6797 16.123 11.416 16.123 11.2402 15.9473L5.14648 10.3223C4.94141 10.1758 4.94141 9.88281 5.11719 9.70703Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chevron_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M14.293 5.11719C14.4102 5.20508 14.4687 5.32227 14.4687 5.46875C14.4687 5.55664 14.4395 5.67383 14.3516 5.76172L9.04883 11.5332L14.3516 17.334C14.5273 17.5098 14.5273 17.8027 14.3223 17.9785C14.1465 18.1543 13.8535 18.1543 13.6777 17.9492L8.05273 11.8555C7.87695 11.6797 7.87695 11.416 8.05273 11.2402L13.6777 5.14648C13.8242 4.94141 14.1172 4.94141 14.293 5.11719Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9.70703 18.8828C9.58984 18.7949 9.53125 18.6777 9.53125 18.5313C9.53125 18.4434 9.56055 18.3262 9.64844 18.2383L14.9512 12.4668L9.64844 6.66602C9.47266 6.49023 9.47266 6.19727 9.67773 6.02148C9.85352 5.8457 10.1465 5.8457 10.3223 6.05078L15.9473 12.1445C16.123 12.3203 16.123 12.584 15.9473 12.7598L10.3223 18.8535C10.1758 19.0586 9.88281 19.0586 9.70703 18.8828Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chevron_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M18.8828 14.293C18.7949 14.4102 18.6777 14.4688 18.5312 14.4688C18.4434 14.4688 18.3262 14.4395 18.2383 14.3516L12.4668 9.04883L6.66602 14.3516C6.49023 14.5273 6.19727 14.5273 6.02148 14.3223C5.8457 14.1465 5.8457 13.8535 6.05078 13.6777L12.1445 8.05273C12.3203 7.87695 12.584 7.87695 12.7598 8.05273L18.8535 13.6777C19.0586 13.8242 19.0586 14.1172 18.8828 14.293Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Chevron_selector_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M7 15L12 20L17 15M7 9L12 4L17 9" stroke="currentcolor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>`;
    }
  })}`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M11.5 7.5C11.5 7.25 11.7188 7 12 7C12.25 7 12.5 7.25 12.5 7.5V11.75L15.25 13.5938C15.5 13.75 15.5625 14.0625 15.4062 14.2812C15.25 14.5312 14.9375 14.5938 14.7188 14.4375L11.7188 12.4375C11.5625 12.3438 11.4688 12.1875 11.4688 12L11.5 7.5ZM12 4C16.4062 4 20 7.59375 20 12C20 16.4375 16.4062 20 12 20C7.5625 20 4 16.4375 4 12C4 7.59375 7.5625 4 12 4ZM5 12C5 15.875 8.125 19 12 19C15.8438 19 19 15.875 19 12C19 8.15625 15.8438 5 12 5C8.125 5 5 8.15625 5 12Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M16.8438 16.875C16.6562 17.0625 16.3125 17.0625 16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.3125 17.0625 7.125 16.875C6.9375 16.6875 6.9375 16.3438 7.125 16.1562L11.2812 12L7.125 7.875C6.9375 7.6875 6.9375 7.34375 7.125 7.15625C7.3125 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.6562 6.96875 16.8438 7.15625C17.0312 7.34375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6875 16.8438 16.875Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Comet_solid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.9688 4.65625C19.5938 5.875 18.9062 8.15625 18.0625 10.5312C18.2812 10.5938 18.4688 10.6562 18.625 10.7188C18.7812 10.75 18.9062 10.8438 18.9375 11C19 11.125 19 11.2812 18.9375 11.4375C18.25 12.75 16.3438 16.1875 14.4688 18.125C14.4375 18.1562 14.4062 18.1875 14.375 18.2188C12 20.625 8.15625 20.625 5.78125 18.25C3.40625 15.8438 3.40625 12 5.78125 9.625C5.8125 9.59375 5.84375 9.5625 5.875 9.53125C7.8125 7.65625 11.25 5.75 12.5625 5.0625C12.6875 5 12.8438 5 12.9688 5.0625C13.125 5.125 13.2188 5.21875 13.25 5.375C13.3125 5.53125 13.375 5.71875 13.4375 5.9375C15.8125 5.09375 18.0938 4.40625 19.3125 4.03125C19.4688 3.96875 19.6875 4.03125 19.8125 4.15625C19.9688 4.28125 20 4.5 19.9688 4.65625ZM13.9688 14C13.9688 11.7812 12.1562 10 9.96875 10C7.75 10 5.96875 11.7812 5.96875 14C5.96875 16.1875 7.75 18 9.96875 18C12.1875 18 13.9688 16.2188 13.9688 14ZM9.96875 13C9.96875 13.5312 9.5 14 8.96875 14C8.40625 14 7.96875 13.5312 7.96875 13C7.96875 12.4375 8.40625 12 8.96875 12C9.21875 12 9.46875 12.0938 9.65625 12.2812C9.84375 12.4688 9.96875 12.75 9.96875 13ZM10.9688 15.5C10.9688 15.75 10.75 16 10.4688 16C10.2188 16 9.96875 15.75 9.96875 15.5C9.96875 15.2188 10.2188 15 10.4688 15C10.75 15 10.9688 15.25 10.9688 15.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Comet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.9375 5C19.625 6.03125 18.875 8.40625 18.0938 10.25C18.1562 10.2812 18.25 10.2812 18.3438 10.3125C18.5938 10.4062 18.8125 10.5938 18.9375 10.875C19.0625 11.125 19.0312 11.4375 18.9062 11.6875C18.1875 13.0312 16.375 16.375 14.5625 18.1875C12.125 20.625 8.1875 20.625 5.8125 18.1875C3.375 15.7812 3.375 11.8438 5.8125 9.4375C7.625 7.59375 10.9688 5.78125 12.3125 5.0625C12.5625 4.9375 12.875 4.90625 13.125 5.03125C13.4062 5.15625 13.5625 5.375 13.6875 5.65625C13.7188 5.71875 13.7188 5.8125 13.75 5.875C15.5938 5.09375 17.9688 4.34375 19 4.0625C19.25 3.96875 19.5625 4.03125 19.75 4.25C19.9688 4.4375 20.0312 4.75 19.9375 5ZM18.875 5.125C17.5938 5.53125 15.25 6.28125 13.6562 7.03125L13.125 7.28125C13.125 7.28125 12.7812 6.15625 12.7188 5.9375C11.4688 6.625 8.21875 8.40625 6.5 10.125C4.46875 12.1562 4.46875 15.4688 6.5 17.5C8.53125 19.5312 11.8438 19.5312 13.875 17.5C15.5938 15.7812 17.375 12.5312 18.0312 11.2188C17.8438 11.1875 17.5938 11.125 17.2812 11.0312L16.7188 10.875L16.9688 10.3438C17.7188 8.75 18.4688 6.40625 18.875 5.125ZM14.2188 13.75C14.2188 15.9375 12.4375 17.7188 10.25 17.7188C8.09375 17.7188 6.28125 15.9375 6.28125 13.75C6.28125 11.5312 8.09375 9.75 10.25 9.75C12.4375 9.75 14.2188 11.5625 14.2188 13.75ZM13.2188 13.75C13.2188 12.0938 11.875 10.75 10.2188 10.75C8.5625 10.75 7.21875 12.0938 7.21875 13.75C7.21875 15.4062 8.5625 16.75 10.2188 16.75C11.875 16.75 13.2188 15.4062 13.2188 13.75ZM10.4688 12.75C10.4688 13.1562 10.1562 13.5 9.75 13.5C9.34375 13.5 9.03125 13.1562 9.03125 12.75C9.03125 12.3125 9.375 12 9.75 12C9.96875 12 10.1562 12.0625 10.25 12.2188C10.4062 12.375 10.4688 12.5625 10.4688 12.75ZM11.4688 15C11.4688 15.25 11.25 15.5 10.9688 15.5C10.7188 15.5 10.5 15.25 10.5 15C10.5 14.7188 10.7188 14.5 11 14.5C11.25 14.5312 11.4688 14.75 11.4688 15Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Compact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9.5 7.5H19.5C19.75 7.5 20 7.28125 20 7C20 6.75 19.75 6.5 19.5 6.5H9.5C9.21875 6.5 9 6.75 9 7C9 7.28125 9.21875 7.5 9.5 7.5ZM19.5 11.5H13.5C13.2188 11.5 13 11.75 13 12C13 12.2812 13.2188 12.5 13.5 12.5H19.5C19.75 12.5 20 12.2812 20 12C20 11.75 19.75 11.5 19.5 11.5ZM10 10.5H9C8.4375 10.5 8 10.9688 8 11.5H6V8.5C6.53125 8.5 7 8.0625 7 7.5V6.5C7 5.96875 6.53125 5.5 6 5.5H5C4.4375 5.5 4 5.96875 4 6.5V7.5C4 8.0625 4.4375 8.5 5 8.5V16C5 16.8438 5.65625 17.5 6.5 17.5H8C8 18.0625 8.4375 18.5 9 18.5H10C10.5312 18.5 11 18.0625 11 17.5V16.5C11 15.9688 10.5312 15.5 10 15.5H9C8.4375 15.5 8 15.9688 8 16.5H6.5C6.21875 16.5 6 16.2812 6 16V12.5H8C8 13.0625 8.4375 13.5 9 13.5H10C10.5312 13.5 11 13.0625 11 12.5V11.5C11 10.9688 10.5312 10.5 10 10.5ZM9 16.5H10V17.5H9V16.5ZM5 7.5V6.5H6V7.5H5ZM10 12.5H9V11.5H10V12.5ZM19.5 16.5H13.5C13.2188 16.5 13 16.75 13 17C13 17.2812 13.2188 17.5 13.5 17.5H19.5C19.75 17.5 20 17.2812 20 17C20 16.75 19.75 16.5 19.5 16.5Z" fill="currentcolor"></path>
  <rect x="5" y="6" width="1" height="2" fill="currentcolor"></rect>
  <rect x="9" y="11" width="1" height="2" fill="currentcolor"></rect>
  <rect x="9" y="16" width="1" height="2" fill="currentcolor"></rect>`;
    }
  })}`;
});
const Converter_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M7.99609 15.627C8.08398 15.3633 8.34766 15.1875 8.61133 15.1875H10.9551V5.57812C10.9551 5.19727 11.248 4.875 11.6289 4.875C11.9805 4.875 12.332 5.19727 12.332 5.57812V15.1875H14.6465C14.9102 15.1875 15.1738 15.3633 15.291 15.627C15.4082 15.8906 15.3496 16.1836 15.1445 16.3887L12.0977 19.6699C11.834 19.9629 11.3652 19.9629 11.0723 19.6699L8.02539 16.3887C7.9082 16.1836 7.87891 15.8906 7.99609 15.627Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Converter_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M15.3496 9.15234C15.2324 9.41602 14.9688 9.5918 14.7344 9.5918H12.3906V19.1719C12.3906 19.582 12.0684 19.875 11.6875 19.875C11.2773 19.875 10.9844 19.582 10.9844 19.1719V9.5918H8.61133C8.31836 9.5918 8.05469 9.41602 7.9668 9.15234C7.87891 8.88867 7.9082 8.5957 8.11328 8.39062L11.1602 5.10938C11.4238 4.81641 11.9219 4.81641 12.1855 5.10938L15.2324 8.39062C15.4375 8.5957 15.4668 8.88867 15.3496 9.15234Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.4688 16.5625C12.2051 16.5625 12 16.7969 12 17.0312V17.5C12 18.0273 11.5605 18.4375 11.0625 18.4375H6.375C5.84766 18.4375 5.4375 18.0273 5.4375 17.5V10C5.4375 9.50195 5.84766 9.0625 6.375 9.0625H9.65625C9.89062 9.0625 10.125 8.85742 10.125 8.59375C10.125 8.35938 9.89062 8.125 9.65625 8.125H6.3457C5.32031 8.125 4.4707 8.97461 4.4707 10L4.5 17.5C4.5 18.5547 5.32031 19.375 6.375 19.375H11.0625C12.0879 19.375 12.9375 18.5547 12.9375 17.5V17.0312C12.9375 16.7969 12.7031 16.5625 12.4688 16.5625ZM19.207 6.92383L16.9512 4.66797C16.7754 4.49219 16.541 4.375 16.2773 4.375H12.9375C11.8828 4.375 11.0625 5.22461 11.0625 6.25V13.75C11.0625 14.8047 11.8828 15.625 12.9375 15.625H17.625C18.6504 15.625 19.5 14.8047 19.5 13.75V7.59766C19.5 7.33398 19.3828 7.09961 19.207 6.92383ZM16.6875 5.72266L18.1523 7.1875H16.6875V5.72266ZM18.5625 13.75C18.5625 14.2773 18.123 14.6875 17.625 14.6875H12.9375C12.4102 14.6875 12 14.2773 12 13.75V6.25C12 5.75195 12.4102 5.3125 12.9375 5.3125H15.75V7.1875C15.75 7.71484 16.1602 8.125 16.6875 8.125H18.5625V13.75Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Descending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.2188 10.3438H17.0938C17.2969 10.3438 17.5 10.5215 17.5 10.75C17.5 10.9531 17.2969 11.1562 17.0938 11.1562H12.2188C11.9902 11.1562 11.8125 10.9531 11.8125 10.75C11.8125 10.5215 11.9902 10.3438 12.2188 10.3438ZM12.2188 13.5938H15.4688C15.6719 13.5938 15.875 13.7715 15.875 14C15.875 14.2031 15.6719 14.4062 15.4688 14.4062H12.2188C11.9902 14.4062 11.8125 14.2031 11.8125 14C11.8125 13.7715 11.9902 13.5938 12.2188 13.5938ZM12.2188 16.8438H13.8438C14.0469 16.8438 14.25 17.0215 14.25 17.25C14.25 17.4531 14.0469 17.6562 13.8438 17.6562H12.2188C11.9902 17.6562 11.8125 17.4531 11.8125 17.25C11.8125 17.0215 11.9902 16.8438 12.2188 16.8438ZM18.7188 7.90625H12.2188C11.9902 7.90625 11.8125 7.70312 11.8125 7.5C11.8125 7.27148 11.9902 7.09375 12.2188 7.09375H18.7188C18.9219 7.09375 19.125 7.27148 19.125 7.5C19.125 7.70312 18.9219 7.90625 18.7188 7.90625ZM8.0293 17.9355C7.87695 18.0879 7.59766 18.0879 7.44531 17.9355L5.00781 15.498C4.85547 15.3457 4.85547 15.0664 5.00781 14.9141C5.16016 14.7617 5.43945 14.7617 5.5918 14.9141L7.34375 16.666V7.09375C7.34375 6.86523 7.52148 6.6875 7.75 6.6875C7.95312 6.6875 8.15625 6.86523 8.15625 7.09375V16.666L9.88281 14.9141C9.95898 14.8379 10.0605 14.8125 10.1875 14.8125C10.2891 14.8125 10.3906 14.8379 10.4668 14.9141C10.6191 15.0664 10.6191 15.3457 10.4668 15.498L8.0293 17.9355Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M11.625 16.375C11.7188 16.4688 11.8438 16.5 12 16.5C12.125 16.5 12.25 16.4688 12.3438 16.375L16.8438 11.875C17.0312 11.6875 17.0312 11.3438 16.8438 11.1562C16.6562 10.9688 16.3125 10.9688 16.125 11.1562L12.5 14.8125V5.5C12.5 5.25 12.25 5 12 5C11.7188 5 11.5 5.25 11.5 5.5V14.8125L7.84375 11.1562C7.65625 10.9688 7.3125 10.9688 7.125 11.1562C6.9375 11.3438 6.9375 11.6875 7.125 11.875L11.625 16.375ZM17.5 18H6.5C6.21875 18 6 18.25 6 18.5C6 18.7812 6.21875 19 6.5 19H17.5C17.75 19 18 18.7812 18 18.5C18 18.25 17.75 18 17.5 18Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 4C7.5625 4 4 7.59375 4 12C4 16.4375 7.5625 20 12 20C16.4062 20 20 16.4375 20 12C20 7.59375 16.4062 4 12 4ZM12 19C8.125 19 5 15.875 5 12C5 8.15625 8.125 5 12 5C15.8438 5 19 8.15625 19 12C19 15.875 15.8438 19 12 19ZM12 13.5C12.25 13.5 12.5 13.2812 12.5 13V8C12.5 7.75 12.25 7.5 12 7.5C11.7188 7.5 11.5 7.75 11.5 8V13C11.5 13.2812 11.7188 13.5 12 13.5ZM12 14.75C11.5625 14.75 11.25 15.0938 11.25 15.5C11.25 15.9375 11.5625 16.25 12 16.25C12.4062 16.25 12.75 15.9375 12.75 15.5C12.75 15.0938 12.4062 14.75 12 14.75Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Exit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M15.375 13.25C15.1641 13.25 15 13.4375 15 13.625V17C15 17.4219 14.6484 17.75 14.25 17.75H7.5C7.07812 17.75 6.75 17.4219 6.75 17V10.25C6.75 9.85156 7.07812 9.5 7.5 9.5H10.125C10.3125 9.5 10.5 9.33594 10.5 9.125C10.5 8.9375 10.3125 8.75 10.125 8.75H7.5C6.65625 8.75 6 9.42969 6 10.25V17C6 17.8438 6.65625 18.5 7.5 18.5H14.25C15.0703 18.5 15.75 17.8438 15.75 17V13.625C15.75 13.4375 15.5625 13.25 15.375 13.25ZM17.625 6.5H13.875C13.6641 6.5 13.5 6.6875 13.5 6.875C13.5 7.08594 13.6641 7.25 13.875 7.25H16.7109L10.2188 13.7422C10.0781 13.8828 10.0781 14.1406 10.2188 14.2812C10.2891 14.3516 10.3828 14.375 10.5 14.375C10.5938 14.375 10.6875 14.3516 10.7578 14.2812L17.25 7.78906V10.625C17.25 10.8359 17.4141 11 17.625 11C17.8125 11 18 10.8359 18 10.625V6.875C18 6.6875 17.8125 6.5 17.625 6.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Eye_hide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M10.875 9.73438L11.6016 10.2969C11.7422 10.2734 11.8594 10.25 12 10.25C13.1719 10.25 14.1562 11.1875 14.2266 12.3594L14.9531 12.9453C14.9766 12.8047 15 12.6641 15 12.5234C15 10.8594 13.6406 9.5 12 9.5C11.6016 9.5 11.2266 9.59375 10.875 9.73438ZM12 17C9.49219 17 7.19531 15.3359 6.02344 12.6172C6 12.5938 6 12.5234 5.97656 12.5234C5.97656 12.5 5.97656 12.4297 5.97656 12.4062C6.28125 11.7266 6.65625 11.1172 7.07812 10.5781L6.49219 10.1094C6.02344 10.6953 5.625 11.375 5.29688 12.1016C5.27344 12.2188 5.22656 12.3828 5.22656 12.5C5.22656 12.6172 5.25 12.8047 5.29688 12.9219C6.5625 15.8047 9.09375 17.75 11.9766 17.75C13.1016 17.75 14.1562 17.4453 15.1172 16.9062L14.4844 16.3906C13.7109 16.7891 12.8672 17 12 17ZM12 8C14.4844 8 16.7812 9.6875 17.9766 12.4062C17.9766 12.4297 17.9766 12.5 17.9766 12.5C17.9766 12.5234 17.9766 12.5938 17.9766 12.6172C17.6719 13.2969 17.2969 13.9062 16.875 14.4453L17.4609 14.9141C17.9297 14.3281 18.3281 13.6484 18.6562 12.8984C18.7031 12.8047 18.7266 12.6172 18.7266 12.5C18.7266 12.3828 18.7031 12.2188 18.6562 12.1016C17.3906 9.21875 14.8594 7.27344 12 7.27344C10.8516 7.27344 9.79688 7.57812 8.83594 8.11719L9.46875 8.63281C10.2656 8.23438 11.1094 8 12 8ZM12 15.5C12.375 15.5 12.75 15.4297 13.1016 15.2891L12.375 14.7266C12.2344 14.75 12.1172 14.7734 12 14.7734C10.8047 14.7734 9.82031 13.8359 9.75 12.6641L9.02344 12.0781C9 12.2188 9 12.3594 9 12.5C9 14.1641 10.3359 15.5 12 15.5ZM19.3359 17.8438L5.08594 6.59375C4.92188 6.45312 4.6875 6.5 4.57031 6.66406C4.42969 6.80469 4.47656 7.0625 4.64062 7.17969L18.8906 18.4297C18.9609 18.4766 19.0312 18.5 19.125 18.5C19.2188 18.5 19.3359 18.4531 19.4062 18.3594C19.5469 18.1953 19.5 17.9609 19.3359 17.8438Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Eye_show = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M11.75 9.5C10.0859 9.5 8.75 10.8594 8.75 12.5C8.75 14.1641 10.0859 15.5 11.75 15.5C13.3906 15.5 14.75 14.1641 14.75 12.5234C14.75 10.8594 13.3906 9.5 11.75 9.5ZM11.75 14.75C10.5078 14.75 9.5 13.7422 9.5 12.5C9.5 11.2812 10.5078 10.25 11.75 10.25C12.9688 10.25 14 11.2812 14 12.5234C14 13.7422 12.9688 14.75 11.75 14.75ZM18.4062 12.1016C17.1406 9.21875 14.6094 7.25 11.75 7.25C8.86719 7.25 6.33594 9.21875 5.07031 12.1016C5.02344 12.2188 5 12.3828 5 12.5C5 12.6172 5.02344 12.8047 5.07031 12.9219C6.33594 15.8047 8.86719 17.75 11.75 17.75C14.6094 17.75 17.1406 15.8047 18.4062 12.9219C18.4531 12.8047 18.5 12.6172 18.5 12.5C18.5 12.3828 18.4531 12.2188 18.4062 12.1016ZM17.7266 12.6172C16.5312 15.3125 14.2344 17 11.75 17C9.24219 17 6.94531 15.3359 5.77344 12.6172C5.75 12.5938 5.75 12.5234 5.72656 12.5234C5.72656 12.5 5.72656 12.4297 5.72656 12.4062C6.94531 9.6875 9.24219 8 11.75 8C14.2344 8 16.5312 9.6875 17.7266 12.4062C17.7266 12.4297 17.7266 12.5 17.7266 12.5C17.7266 12.5234 17.7266 12.5938 17.7266 12.6172Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Feed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M4.5 7.5H17.5C17.75 7.5 18 7.28125 18 7.03125C18 6.78125 17.75 6.5 17.5 6.5H4.5C4.21875 6.5 4 6.75 4 7C4 7.25 4.21875 7.5 4.5 7.5ZM19.5 11.5H6.5C6.21875 11.5 6 11.75 6 12C6 12.2812 6.21875 12.5 6.5 12.5H19.5C19.75 12.5 20 12.2812 20 12C20 11.75 19.75 11.5 19.5 11.5ZM17.5 16.5H4.5C4.21875 16.5 4 16.75 4 17C4 17.25 4.21875 17.5 4.5 17.5H17.5C17.75 17.5 18 17.2812 18 17.0312C18 16.7812 17.75 16.5 17.5 16.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Feedback_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 10.2227L12.484 9.73047C12.5277 9.68672 12.5496 9.6457 12.6207 9.60469C13.4273 8.91836 14.6332 8.95937 15.3934 9.73047C16.1973 10.5453 16.1973 11.8688 15.3934 12.659L12.9215 15.1937C12.6645 15.4535 12.3309 15.582 11.9973 15.5574C11.6637 15.5793 11.3328 15.4508 11.0785 15.1937L8.60664 12.659C7.80273 11.8688 7.80273 10.5453 8.60664 9.73047C9.3668 8.95937 10.5727 8.91836 11.3793 9.60469C11.4258 9.6457 11.4723 9.68672 11.516 9.73047L12 10.2227ZM12.298 14.5785L14.7699 12.0684C15.2375 11.5953 15.2375 10.8187 14.7699 10.3457C14.3105 9.87812 13.5695 9.87812 13.1074 10.3457L12 11.4695L10.8926 10.3457C10.4305 9.87812 9.68945 9.87812 9.23008 10.3457C8.7625 10.8187 8.7625 11.5953 9.23008 12.0684L11.702 14.5785C11.7867 14.666 11.8934 14.6824 11.9754 14.6824C12.1066 14.6824 12.2133 14.666 12.298 14.5785ZM19 12C19 15.8664 15.8664 19 12 19C8.13359 19 5 15.8664 5 12C5 8.13359 8.13359 5 12 5C15.8664 5 19 8.13359 19 12ZM12 5.875C8.61758 5.875 5.875 8.61758 5.875 12C5.875 15.3824 8.61758 18.125 12 18.125C15.3824 18.125 18.125 15.3824 18.125 12C18.125 8.61758 15.3824 5.875 12 5.875Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Feedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19 9.73383C19 10.8507 18.5843 11.9235 17.8421 12.7171C16.1334 14.5444 14.4762 16.4498 12.7037 18.2109C12.2974 18.6087 11.6529 18.5942 11.2642 18.1784L6.15763 12.7171C4.61412 11.0663 4.61412 8.40133 6.15763 6.75058C7.71631 5.0836 10.2556 5.0836 11.8142 6.75058L11.9999 6.94908L12.1854 6.75069C12.9327 5.95103 13.9505 5.5 15.0137 5.5C16.0769 5.5 17.0947 5.95098 17.8421 6.75058C18.5844 7.54421 19 8.61695 19 9.73383Z" stroke="currentcolor" stroke-width="1.1" stroke-linejoin="round"></path>`;
    }
  })}`;
});
const File_import = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.125 16.6562C11.9375 16.8438 11.9375 17.1875 12.125 17.375C12.2188 17.4688 12.3438 17.5 12.5 17.5C12.625 17.5 12.75 17.4688 12.8438 17.375L15.8438 14.375C16.0312 14.1875 16.0312 13.8438 15.8438 13.6562L12.8438 10.6562C12.6562 10.4688 12.3125 10.4688 12.125 10.6562C11.9375 10.8438 11.9375 11.1875 12.125 11.375L14.2812 13.5H4.5C4.21875 13.5 4 13.75 4 14C4 14.2812 4.21875 14.5 4.5 14.5H14.2812L12.125 16.6562ZM19.4062 7.9375L16.0625 4.59375C15.6875 4.21875 15.1875 4 14.6562 4H10C8.875 4 8 4.90625 8 6V11.5C8 11.7812 8.21875 12 8.5 12C8.75 12 9 11.7812 9 11.5V6C9 5.46875 9.4375 5 10 5H14V8.5C14 9.34375 14.6562 10 15.5 10H19V18C19 18.5625 18.5312 19 18 19H10C9.4375 19 9 18.5625 9 18V16.5C9 16.25 8.75 16 8.5 16C8.21875 16 8 16.25 8 16.5V18C8 19.125 8.875 20 10 20H18C19.0938 20 20 19.125 20 18V9.34375C20 8.8125 19.7812 8.3125 19.4062 7.9375ZM15.5 9C15.2188 9 15 8.78125 15 8.5V5.09375C15.125 5.125 15.25 5.1875 15.375 5.3125L18.6875 8.625C18.8125 8.75 18.875 8.875 18.9062 9H15.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const File_upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M7.8125 8.875L11.5 5.625V15.5C11.5 15.7812 11.7188 16 12 16C12.25 16 12.5 15.7812 12.5 15.5V5.625L16.1562 8.875C16.25 8.96875 16.375 9 16.5 9C16.625 9 16.75 8.96875 16.8438 8.84375C17.0312 8.65625 17.0312 8.3125 16.8125 8.15625L12.3125 4.15625C12.125 3.96875 11.8438 3.96875 11.6562 4.15625L7.15625 8.15625C6.9375 8.3125 6.9375 8.625 7.125 8.84375C7.28125 9.0625 7.625 9.0625 7.8125 8.875ZM18 14H14.5C14.2188 14 14 14.25 14 14.5C14 14.7812 14.2188 15 14.5 15H18C18.5312 15 19 15.4688 19 16V18C19 18.5625 18.5312 19 18 19H6C5.4375 19 5 18.5625 5 18V16C5 15.4688 5.4375 15 6 15H9.5C9.75 15 10 14.7812 10 14.5C10 14.25 9.75 14 9.5 14H6C4.875 14 4 14.9062 4 16V18C4 19.125 4.875 20 6 20H18C19.0938 20 20 19.125 20 18V16C20 14.9062 19.0938 14 18 14ZM17.75 17C17.75 16.5938 17.4062 16.25 17 16.25C16.5625 16.25 16.25 16.5938 16.25 17C16.25 17.4375 16.5625 17.75 17 17.75C17.4062 17.75 17.75 17.4375 17.75 17Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M5.5 7.5H18.5C18.75 7.5 19 7.28125 19 7.03125C19 6.78125 18.75 6.5 18.5 6.5H5.5C5.21875 6.5 5 6.75 5 7C5 7.25 5.21875 7.5 5.5 7.5ZM16.5 11.5H7.5C7.21875 11.5 7 11.75 7 12C7 12.2812 7.21875 12.5 7.5 12.5H16.5C16.75 12.5 17 12.2812 17 12.0312C17 11.75 16.75 11.5 16.5 11.5ZM13.5 16.5H10.5C10.2188 16.5 10 16.75 10 17C10 17.25 10.2188 17.5 10.5 17.5H13.5C13.75 17.5 14 17.2812 14 17.0312C14 16.7812 13.75 16.5 13.5 16.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Filter_solid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M3.99961 3H19.9997C20.552 3 20.9997 3.44764 20.9997 3.99987L20.9999 5.58569C21 5.85097 20.8946 6.10538 20.707 6.29295L14.2925 12.7071C14.105 12.8946 13.9996 13.149 13.9996 13.4142L13.9996 19.7192C13.9996 20.3698 13.3882 20.8472 12.7571 20.6894L10.7571 20.1894C10.3119 20.0781 9.99961 19.6781 9.99961 19.2192L9.99961 13.4142C9.99961 13.149 9.89425 12.8946 9.70672 12.7071L3.2925 6.29289C3.10496 6.10536 2.99961 5.851 2.99961 5.58579V4C2.99961 3.44772 3.44732 3 3.99961 3Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M8.36328 13.3906L11.125 10.6289L13.4219 12.9531C13.5859 13.1172 13.8867 13.1172 14.0508 12.9531L17.9883 9.04297C18.1523 8.85156 18.1523 8.57812 17.9883 8.41406C17.8242 8.25 17.5234 8.25 17.3594 8.41406L13.75 12.0234L11.4258 9.69922C11.2617 9.53516 10.9609 9.53516 10.7969 9.69922L7.73438 12.7617C7.57031 12.9258 7.57031 13.2266 7.73438 13.3906C7.89844 13.5547 8.19922 13.5547 8.36328 13.3906ZM18.5625 17H7.1875C6.44922 17 5.875 16.4258 5.875 15.6875V6.0625C5.875 5.84375 5.65625 5.625 5.4375 5.625C5.19141 5.625 5 5.84375 5 6.0625V15.6875C5 16.918 5.95703 17.875 7.1875 17.875H18.5625C18.7812 17.875 19 17.6836 19 17.4375C19 17.2188 18.7812 17 18.5625 17Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Hyphen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M20 12C20 12.4375 19.6562 12.75 19.25 12.75H4.75C4.3125 12.75 4 12.4375 4 12C4 11.5938 4.3125 11.25 4.75 11.25H19.25C19.6562 11.25 20 11.5938 20 12Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Import = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 4.29289L12 15.2929M17 8.79289L12.3536 4.14645C12.1583 3.95118 11.8417 3.95118 11.6464 4.14645L7 8.79289" stroke="currentcolor"></path>
  <path d="M2 14V17.6673C2 19.5083 3.49238 21.0007 5.33333 21.0007H18.6667C20.5076 21.0007 22 19.5083 22 17.6673V14" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 4C7.5625 4 4 7.59375 4 12C4 16.4375 7.5625 20 12 20C16.4062 20 20 16.4375 20 12C20 7.59375 16.4062 4 12 4ZM12 19C8.125 19 5 15.875 5 12C5 8.15625 8.125 5 12 5C15.8438 5 19 8.15625 19 12C19 15.875 15.8438 19 12 19ZM12 9.75C12.4062 9.75 12.75 9.4375 12.75 9C12.75 8.59375 12.4062 8.25 12 8.25C11.5625 8.25 11.25 8.59375 11.25 9C11.25 9.4375 11.5625 9.75 12 9.75ZM13.5 15H12.5V11.5C12.5 11.25 12.25 11 12 11H11C10.7188 11 10.5 11.25 10.5 11.5C10.5 11.7812 10.7188 12 11 12H11.5V15H10.5C10.2188 15 10 15.25 10 15.5C10 15.7812 10.2188 16 10.5 16H13.5C13.75 16 14 15.7812 14 15.5C14 15.25 13.75 15 13.5 15Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Inverted_checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<circle cx="12" cy="12" r="8"${add_attribute("fill", colors.gray[900], 0)}></circle>
  <path d="M15.5 9.33337C15.5 9.474 15.4375 9.599 15.3438 9.69275L11.3438 13.6927C11.25 13.7865 11.125 13.8334 11 13.8334C10.8594 13.8334 10.7344 13.7865 10.6406 13.6927L8.64062 11.6927C8.54688 11.599 8.5 11.474 8.5 11.3334C8.5 11.0521 8.71875 10.8334 9 10.8334C9.125 10.8334 9.25 10.8959 9.34375 10.9896L11 12.6302L14.6406 8.98962C14.7344 8.89587 14.8594 8.83337 15 8.83337C15.2656 8.83337 15.5 9.05212 15.5 9.33337Z" fill="white"></path>`;
    }
  })}`;
});
const Json = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M15 5.5C15 5.1875 14.75 4.5 14 4.5C13.5625 4.5 13.1562 4.8125 13.0312 5.25L9.03125 19.25C9 19.3438 8.96875 19.4375 8.96875 19.5C8.96875 19.8438 9.25 20.5 10 20.5C10.4062 20.5 10.8125 20.2188 10.9375 19.7812L14.9375 5.78125C14.9688 5.6875 15 5.59375 15 5.5ZM7.5 9C7.5 8.40625 7.03125 8 6.5 8C6.21875 8 5.96875 8.09375 5.78125 8.28125L2.28125 11.7812C2.09375 12 2 12.25 2 12.5C2 12.7188 2.09375 13.0312 2.28125 13.2188L5.78125 16.7188C5.96875 16.9062 6.21875 17 6.5 17C7.03125 17 7.5 16.5625 7.5 16C7.5 15.7188 7.375 15.4688 7.1875 15.2812L4.40625 12.5L7.1875 9.6875C7.375 9.53125 7.5 9.28125 7.5 9ZM22 12.5C22 12.2188 21.875 11.9688 21.6875 11.7812L18.1875 8.28125C18 8.125 17.75 8 17.5 8C16.9375 8 16.5 8.40625 16.5 9C16.5 9.25 16.5938 9.5 16.7812 9.6875L19.5625 12.5L16.7812 15.2812C16.5938 15.5 16.5 15.75 16.5 16C16.5 16.5625 16.9375 17 17.5 17C17.75 17 18 16.875 18.1875 16.6875L21.6875 13.1875C21.875 13.0312 22 12.7812 22 12.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M16.6875 10.9375H15.75V8.125C15.75 6.04492 14.0508 4.375 12 4.375C9.91992 4.375 8.25 6.07422 8.25 8.125V10.9082L7.3125 10.9375C6.25781 10.9375 5.4375 11.7578 5.4375 12.8125V17.5C5.4375 18.5254 6.25781 19.375 7.3125 19.375H16.6875C17.7129 19.375 18.5625 18.5254 18.5625 17.5V12.8125C18.5625 11.7871 17.7129 10.9375 16.6875 10.9375ZM9.1875 8.125C9.1875 6.60156 10.4473 5.3125 12 5.3125C13.5234 5.3125 14.8125 6.60156 14.8125 8.125V10.9375H9.1875V8.125ZM17.625 17.5C17.625 18.0273 17.1855 18.4375 16.6875 18.4375H7.3125C6.78516 18.4375 6.375 18.0273 6.375 17.5V12.8125C6.375 12.3145 6.78516 11.875 7.3125 11.875H16.6875C17.1855 11.875 17.625 12.3145 17.625 12.8125V17.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.8438 11.6562L15.3438 7.15625C15.1562 6.96875 14.8125 6.96875 14.625 7.15625C14.4375 7.34375 14.4375 7.6875 14.625 7.875L18.2812 11.5H9.5C9.21875 11.5 9 11.75 9 12C9 12.2812 9.21875 12.5 9.5 12.5H18.2812L14.625 16.1562C14.4375 16.3438 14.4375 16.6875 14.625 16.875C14.8125 17.0625 15.1562 17.0625 15.3438 16.875L19.8438 12.375C19.9375 12.2812 20 12.1562 20 12C20 11.875 19.9375 11.75 19.8438 11.6562ZM9.5 18H6.5C5.65625 18 5 17.3438 5 16.5V7.5C5 6.6875 5.65625 6 6.5 6H9.5C9.75 6 10 5.78125 10 5.5C10 5.25 9.75 5 9.5 5H6.5C5.09375 5 4 6.125 4 7.5V16.5C4 17.9062 5.09375 19 6.5 19H9.5C9.75 19 10 18.7812 10 18.5C10 18.25 9.75 18 9.5 18Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Namespace_switcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<ellipse cx="12" cy="12" rx="4" ry="4" stroke="currentcolor"></ellipse>
  <path d="M10 2.19213C5.43552 3.11867 2 7.15418 2 11.9921C2 14.7535 3.11929 17.2535 4.92893 19.0632C5.80656 19.9408 6.84656 20.656 8 21.16M6 1L10.1 2.14208L8 6" stroke="currentcolor"></path>
  <path d="M14 21.8079C18.5645 20.8813 22 16.8458 22 12.0079C22 9.24649 20.8807 6.74649 19.0711 4.93684C18.1934 4.05922 17.1534 3.34396 16 2.84M18 23L13.9 21.8579L16 18" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Namespace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M5.63598 5.63602C9.1507 2.12131 14.8492 2.12131 18.3639 5.63602C21.8786 9.15073 21.8786 14.8492 18.3639 18.3639M5.63598 5.63602C2.12126 9.15073 2.12126 14.8492 5.63598 18.3639C9.1507 21.8786 14.8492 21.8786 18.3639 18.3639M5.63598 5.63602C2.99994 8.27205 2.99994 10.9549 5.63598 13.591C8.27202 16.227 12.5459 16.227 15.1819 13.591M18.3639 18.3639C20.9999 15.7279 20.9999 13.045 18.3639 10.409C15.7279 7.77295 11.454 7.77295 8.81796 10.409" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Pin_filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M11.25 17.1875C11.25 17.2344 11.25 17.2578 11.25 17.2812L11.8125 18.3828C11.8828 18.5234 12.0938 18.5234 12.1641 18.3828L12.7266 17.2812C12.7266 17.2578 12.75 17.2109 12.75 17.1875V15.5H11.25V17.1875ZM14.4844 11.5391L14.1797 8.75H15.1875C15.4922 8.75 15.75 8.51562 15.75 8.21094V7.0625C15.75 6.75781 15.4922 6.5 15.1875 6.5H8.8125C8.48438 6.5 8.25 6.75781 8.25 7.0625V8.16406C8.25 8.51562 8.48438 8.75 8.8125 8.75H9.79688L9.49219 11.5391C8.36719 12.0547 7.5 13.0156 7.5 14.1875C7.5 14.4922 7.73438 14.7266 8.0625 14.7266H15.9375C16.2422 14.7266 16.5 14.4688 16.5 14.1875C16.5 12.9922 15.6094 12.0547 14.4844 11.5391Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M14.7188 11.0234L14.5781 7.625H15.1875C15.4922 7.625 15.75 7.39062 15.75 7.0625C15.75 6.75781 15.4922 6.5 15.1875 6.5H8.8125C8.48438 6.5 8.25 6.75781 8.25 7.0625C8.25 7.39062 8.48438 7.625 8.8125 7.625H9.53906L9.28125 11.0234C8.15625 11.6328 7.5 12.6172 7.5 13.6953C7.5 14.2812 7.96875 14.75 8.55469 14.75H11.4375V17.9375C11.4375 18.2656 11.6719 18.5 12 18.5C12.3047 18.5 12.5625 18.2656 12.5625 17.9375V14.75H15.4453C16.0078 14.75 16.5 14.2812 16.5 13.6953C16.5 12.6406 15.8203 11.6562 14.7188 11.0234ZM12.5625 13.625V11.9375C12.5625 11.6328 12.3047 11.375 12 11.375C11.6719 11.375 11.4375 11.6328 11.4375 11.9375V13.625H8.625C8.64844 12.9453 9.1875 12.2891 10.0547 11.8906L10.3594 11.75L10.6641 7.625H13.4531L13.6172 11.75L13.9219 11.8906C14.7891 12.2891 15.3281 12.9453 15.3516 13.625H12.5625Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Regions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 4C7.5625 4 4 7.59375 4 12C4 16.4375 7.5625 20 12 20C16.4062 20 20 16.4375 20 12C20 7.59375 16.4062 4 12 4ZM18.9688 12.25L17.3438 11.8438C17.2812 11.8438 17.25 11.8125 17.1875 11.75L16.625 10.9062C16.5938 10.8125 16.5938 10.7188 16.625 10.625L17.25 9.71875C17.2812 9.65625 17.3125 9.65625 17.3438 9.625L18.3125 9.03125C18.75 9.9375 19 10.9375 19 12C19 12.0938 18.9688 12.1875 18.9688 12.25ZM5 12C5 11.625 5.03125 11.25 5.09375 10.875C5.46875 11.3125 5.84375 11.7188 5.90625 11.8438C6.09375 12.125 6.3125 12.375 6.5625 12.5938C6.90625 12.9062 7.28125 13.1562 7.6875 13.3438C8.09375 13.5625 8.75 13.9062 9.1875 14.1562C9.34375 14.25 9.4375 14.4062 9.4375 14.5938V15.5938C9.4375 16 9.59375 16.375 9.875 16.6562C10.2812 17.0625 10.4688 17.6562 10.4375 17.8438C10.4375 17.9062 10.4375 17.9375 10.4375 17.9688V18.8438C7.3125 18.125 5 15.3438 5 12ZM11.4375 19V17.9688C11.5312 17.4062 11.1562 16.5 10.5938 15.9375C10.5 15.875 10.4375 15.7188 10.4375 15.5938V14.5938C10.4375 14.0625 10.1562 13.5625 9.6875 13.2812C9.21875 13.0312 8.5625 12.6875 8.125 12.4688C7.8125 12.3125 7.53125 12.0938 7.21875 11.8438C7.03125 11.6562 6.875 11.4688 6.75 11.2812C6.625 11.0938 6 10.4062 5.375 9.6875C6.15625 7.46875 8 5.78125 10.2812 5.21875L12.25 7L11.7812 7.46875C11.5 7.75 11.4688 8.21875 11.75 8.5H11.5625C11.375 8.5 11.1875 8.59375 11.0312 8.71875L10.7188 9.03125C10.5 9.25 10.4375 9.59375 10.5938 9.90625L10.7188 10.1562C10.5938 10.0938 10.4688 10.0938 10.3438 10.0938C10.2188 10.0938 10.125 10.0938 10.0312 10.125L9.03125 10.4688C8.6875 10.5625 8.4375 10.9062 8.4375 11.2812C8.4375 11.625 8.625 11.9062 8.9375 12.0625L9.28125 12.25C9.625 12.4062 9.96875 12.5 10.3438 12.5C10.4375 12.5938 10.5625 12.75 10.625 12.8438C11 13.3438 11.0625 13.375 11.3438 13.5H13.5312C13.6562 13.5 13.7812 13.5625 13.875 13.6562L14.3125 14.0938C14.4062 14.1875 14.4375 14.2812 14.4375 14.4062C14.4375 14.6562 14.3438 14.9062 14.1562 15.0938L13.8125 15.4375C13.4688 15.8125 13.5 16.0938 13.3438 16.4688L12.5625 19C12.375 19 12.1875 19 12 19C11.8125 19 11.625 19 11.4375 19ZM13.6875 18.8125L14.3125 16.8125C14.3438 16.6562 14.375 16.5312 14.4062 16.4062C14.4688 16.1875 14.4688 16.1875 14.5312 16.125L14.875 15.7812C15.2188 15.4375 15.4375 14.9375 15.4375 14.4062C15.4375 14.0312 15.3125 13.6562 15.0312 13.4062L14.5938 12.9688C14.3125 12.6875 13.9375 12.5 13.5312 12.5H11.625C11.5938 12.4688 11.5312 12.4062 11.4375 12.25C11.2812 12.0312 11.1562 11.875 11.0312 11.7812C10.875 11.625 10.625 11.5312 10.4062 11.5312C10.1562 11.5 9.9375 11.4375 9.71875 11.3438L9.65625 11.3125L10.3438 11.0938C10.4688 11.125 10.5938 11.1562 10.7188 11.1562C10.9688 11.1562 11.25 11.0312 11.4375 10.8438C11.7188 10.5312 11.7812 10.0625 11.5938 9.71875L11.5625 9.625L11.6562 9.5H11.75C12.125 9.5 12.5 9.28125 12.6562 8.9375C12.7812 8.625 12.7812 8.3125 12.625 8.03125L12.9375 7.71875C13.125 7.53125 13.25 7.25 13.25 7C13.2188 6.71875 13.125 6.46875 12.9062 6.28125L11.5625 5.03125C11.6875 5.03125 11.8438 5 12 5C14.4062 5 16.5625 6.28125 17.8125 8.15625L16.8438 8.75C16.6562 8.875 16.5312 9 16.4062 9.15625L15.8125 10.0625C15.5312 10.5 15.5312 11.0312 15.8125 11.4688L16.375 12.3125C16.5312 12.5312 16.7812 12.75 17.0938 12.8125L18.875 13.2812C18.375 15.9688 16.3125 18.125 13.6875 18.8125Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Relationship = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M5.25 13H11.25V13.75C11.25 14.1875 11.5625 14.5 12 14.5C12.4062 14.5 12.75 14.1875 12.75 13.7812V13H18.75V13.75C18.75 14.1875 19.0625 14.5 19.5 14.5C19.9062 14.5 20.25 14.1875 20.25 13.7812V12.7188C20.25 12.0625 19.6875 11.5 19.0312 11.5H12.75V9.5H14C14.5312 9.5 15 9.0625 15 8.5V5.5C15 4.96875 14.5312 4.5 14 4.5H10C9.4375 4.5 9 4.96875 9 5.5V8.5C9 8.78125 9.09375 9.03125 9.28125 9.21875C9.46875 9.40625 9.71875 9.5 10 9.5H11.25V11.5H4.9375C4.28125 11.5 3.75 12.0625 3.75 12.7188V13.75C3.75 14.1875 4.0625 14.5 4.46875 14.5C4.84375 14.5 5.25 14.1875 5.25 13.75V13ZM10.5 8V6H13.5V8H10.5ZM21 15.5H18C17.4375 15.5 17 15.9688 17 16.5V19.5C17 20.0625 17.4375 20.5 18 20.5H21C21.5312 20.5 22 20.0625 22 19.5V16.5C22 15.9688 21.5312 15.5 21 15.5ZM20.5 19H18.5V17H20.5V19ZM13.5 15.5H10.5C9.9375 15.5 9.5 15.9688 9.5 16.5V19.5C9.5 20.0625 9.9375 20.5 10.5 20.5H13.5C14.0312 20.5 14.5 20.0625 14.5 19.5V16.5C14.5 15.9688 14.0312 15.5 13.5 15.5ZM13 19H11V17H13V19ZM6 15.5H3C2.4375 15.5 2 15.9688 2 16.5V19.5C2 20.0625 2.4375 20.5 3 20.5H6C6.53125 20.5 7 20.0625 7 19.5V16.5C7 15.9688 6.53125 15.5 6 15.5ZM5.5 19H3.5V17H5.5V19Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Retention = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.5 14C12.5 14.2812 12.25 14.5 11.9688 14.5C11.7188 14.5 11.4688 14.2812 11.4688 14V10.5C11.4688 10.25 11.7188 10 11.9688 10C12.25 10 12.5 10.25 12.5 10.5V14ZM8.96875 4.5C8.96875 4.25 9.21875 4 9.46875 4H14.5C14.75 4 15 4.25 15 4.5C15 4.78125 14.75 5 14.5 5H12.5V7.03125C14.0312 7.15625 15.4062 7.8125 16.4688 8.8125L17.625 7.65625C17.8125 7.46875 18.1562 7.46875 18.3438 7.65625C18.5312 7.84375 18.5312 8.1875 18.3438 8.375L17.1562 9.5625C18 10.6562 18.5 12.0312 18.5 13.5C18.5 17.0938 15.5625 20 12 20C8.40625 20 5.5 17.0938 5.5 13.5C5.5 10.0938 8.125 7.28125 11.5 7.03125V5H9.5C9.21875 5 9 4.78125 9 4.5H8.96875ZM11.9688 19C15.0312 19 17.5 16.5625 17.5 13.5C17.5 10.4688 15.0312 8 11.9688 8C8.9375 8 6.46875 10.4688 6.46875 13.5C6.46875 16.5625 8.9375 19 11.9688 19Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Retry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M4.125 12.2852C4.125 16.6094 7.64062 20.125 11.9648 20.125C15.6562 20.125 18.293 17.4531 18.293 16.7852C18.293 16.4336 18.0469 16.2227 17.7305 16.2227C17.0273 16.1875 15.9727 19 12 19C8.27344 19 5.25 15.9766 5.25 12.25C5.25 8.55859 8.27344 5.5 12 5.5C14.6367 5.5 16.3242 7.08203 16.3594 7.11719L14.3906 9.05078C14.2852 9.15625 14.2148 9.29688 14.2148 9.47266C14.25 9.75391 14.4961 10 14.8125 10H19.3125C19.5938 10 19.875 9.75391 19.875 9.4375V4.9375C19.875 4.65625 19.6289 4.41016 19.3125 4.41016C19.1367 4.41016 18.9961 4.44531 18.8906 4.55078L17.1328 6.34375C16.8164 5.88672 14.6367 4.41016 12 4.41016C7.64062 4.41016 4.125 7.92578 4.125 12.2852ZM16.1484 8.875L18.75 6.30859V8.875H16.1484Z" fill="currentcolor"></path>
  <path d="M19 9.07037L19 6L16 9L19 9.07037Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Rocket_ship = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M10.3004 16.451H13.9997L15.9062 10.3505C16.4497 8.61088 16.1045 6.71527 14.9825 5.27907L12.5873 2.21328C12.3652 1.92891 11.9349 1.92891 11.7128 2.21328L9.31763 5.27907C8.19561 6.71527 7.85035 8.61088 8.39397 10.3505L10.3004 16.451ZM10.3004 16.451L7.52601 18.3006C7.52601 18.3006 5.67634 14.6013 8.91326 12.2892M10.3004 19.2255C10.3004 21.0752 12.15 22 12.15 22C12.15 22 13.9997 21.0752 13.9997 19.2255M15.7859 12.2892C19.0229 14.6013 17.1732 18.3006 17.1732 18.3006L14.3987 16.4509M12.15 10.9018C11.1285 10.9018 10.3004 10.0737 10.3004 9.05214C10.3004 8.03059 11.1285 7.20247 12.15 7.20247C13.1716 7.20247 13.9997 8.03059 13.9997 9.05214C13.9997 10.0737 13.1716 10.9018 12.15 10.9018Z" stroke-linecap="round" stroke-linejoin="round" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Schedules = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M4.25273 10C4.59726 8.66017 5.29407 7.39222 6.34315 6.34315C9.46734 3.21895 14.5327 3.21895 17.6569 6.34315C18.7059 7.39222 19.4027 8.66017 19.7473 10M6 21V17H10M6.34419 17.6577C6.83268 18.1472 7.38802 18.5765 8.00105 18.9299C8.59342 19.2715 9.23967 19.5421 9.93151 19.7274C10.6233 19.9128 11.3183 20.0016 12.002 20.002C12.7096 20.0025 13.4051 19.9083 14.0729 19.7288C14.7501 19.5466 15.3987 19.2766 16.0021 18.9282C16.6054 18.5799 17.1635 18.1532 17.6599 17.6578C18.1493 17.1693 18.5786 16.614 18.932 16.001C19.2735 15.4086 19.5441 14.7624 19.7295 14.0706M12 8V12L15 15M2.58579 10.5858C3.36683 9.80474 4.63316 9.80474 5.41421 10.5858C6.19526 11.3668 6.19526 12.6332 5.41421 13.4142C4.63317 14.1953 3.36684 14.1953 2.58579 13.4142C1.80474 12.6332 1.80474 11.3668 2.58579 10.5858ZM18.5858 10.5858C19.3668 9.80474 20.6332 9.80474 21.4142 10.5858C22.1953 11.3668 22.1953 12.6332 21.4142 13.4142C20.6332 14.1953 19.3668 14.1953 18.5858 13.4142C17.8047 12.6332 17.8047 11.3668 18.5858 10.5858Z" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.8438 19.1562L15.4062 14.75C16.4062 13.5938 16.9688 12.125 16.9688 10.5C16.9688 6.9375 14.0312 4 10.4688 4C6.875 4 4 6.9375 4 10.5C4 14.0938 6.90625 17 10.4688 17C12.0625 17 13.5312 16.4375 14.6875 15.4375L19.0938 19.875C19.2188 19.9688 19.3438 20 19.5 20C19.625 20 19.75 19.9688 19.8438 19.875C20.0312 19.6875 20.0312 19.3438 19.8438 19.1562ZM10.5 16C7.4375 16 5 13.5312 5 10.5C5 7.46875 7.4375 5 10.5 5C13.5312 5 16 7.46875 16 10.5C16 13.5625 13.5312 16 10.5 16Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0996 3.28398L10.0996 5.45963C10.0996 5.66686 9.97177 5.85261 9.77822 5.92664C9.09449 6.18814 8.46588 6.562 7.91507 7.02589C7.75648 7.15946 7.53192 7.18128 7.35058 7.08076L5.44605 6.02507C5.40905 6.05372 5.36597 6.08967 5.31723 6.13444C5.07457 6.35731 4.69338 6.79715 4.22805 7.63663C3.76272 8.47611 3.59171 9.03245 3.5313 9.35634C3.51916 9.4214 3.51151 9.47699 3.50681 9.52355L5.41061 10.5788C5.59168 10.6792 5.69216 10.8808 5.66333 11.0858C5.62135 11.3842 5.5996 11.6894 5.5996 12C5.5996 12.3105 5.62134 12.6157 5.66331 12.9141C5.69214 13.1191 5.59165 13.3206 5.41058 13.421L3.50686 14.4763C3.51156 14.5228 3.51921 14.5784 3.53135 14.6435C3.59176 14.9674 3.76276 15.5237 4.2281 16.3632C4.69343 17.2027 5.07461 17.6425 5.31728 17.8654C5.36602 17.9101 5.4091 17.9461 5.44609 17.9747L7.35046 16.9191C7.5318 16.8186 7.75637 16.8404 7.91496 16.974C8.46579 17.4379 9.09444 17.8118 9.77822 18.0734C9.97177 18.1474 10.0996 18.3331 10.0996 18.5404V20.716C10.1426 20.7345 10.1949 20.7547 10.2577 20.7757C10.5703 20.8798 11.1398 21 12.0996 21C13.0594 21 13.6289 20.8798 13.9415 20.7757C14.0043 20.7547 14.0566 20.7345 14.0996 20.716V18.5497C14.0996 18.3425 14.2274 18.1568 14.421 18.0827C15.1016 17.8224 15.7307 17.4402 16.2843 16.974C16.4429 16.8404 16.6674 16.8186 16.8488 16.9191L18.7532 17.9748C18.7902 17.9461 18.8333 17.9102 18.882 17.8654C19.1247 17.6425 19.5059 17.2027 19.9712 16.3632C20.4365 15.5237 20.6075 14.9674 20.668 14.6435C20.6801 14.5784 20.6877 14.5228 20.6924 14.4763L18.7886 13.421C18.6076 13.3206 18.5071 13.119 18.5359 12.914C18.5779 12.6156 18.5996 12.3105 18.5996 12C18.5996 11.6895 18.5779 11.3843 18.5359 11.0858C18.507 10.8808 18.6075 10.6792 18.7886 10.5789L20.6925 9.52352C20.6878 9.47696 20.6801 9.42138 20.668 9.35632C20.6076 9.03243 20.4366 8.47609 19.9713 7.63661C19.5059 6.79712 19.1247 6.35728 18.8821 6.13442C18.8333 6.08965 18.7902 6.0537 18.7533 6.02504L16.8486 7.08078C16.6673 7.1813 16.4427 7.15947 16.2842 7.02591C15.7333 6.56201 15.1047 6.18815 14.421 5.92664C14.2274 5.85261 14.0996 5.66686 14.0996 5.45963V3.28398C14.0566 3.26552 14.0043 3.24527 13.9415 3.22434C13.6289 3.12015 13.0594 3 12.0996 3C11.1398 3 10.5703 3.12015 10.2577 3.22434C10.1949 3.24527 10.1426 3.26552 10.0996 3.28398ZM14.5996 3L14.9532 2.64645C15.0469 2.74021 15.0996 2.86739 15.0996 3V5.1242C15.6577 5.36805 16.1803 5.67776 16.6575 6.0434L18.5168 5.01275C18.6328 4.94846 18.7696 4.93287 18.897 4.96942L18.7592 5.45006C18.897 4.96942 18.8975 4.96956 18.898 4.9697L18.899 4.96998L18.9009 4.97055L18.905 4.97178L18.914 4.97458C18.9202 4.97659 18.9271 4.97891 18.9346 4.98157C18.9496 4.98691 18.967 4.99362 18.9867 5.00202C19.0261 5.01884 19.0744 5.04235 19.1309 5.07499C19.2438 5.14032 19.3883 5.2416 19.5585 5.39791C19.8981 5.7098 20.3416 6.24204 20.8459 7.1518C21.3502 8.06155 21.5665 8.71969 21.651 9.17297C21.6934 9.40012 21.7028 9.57631 21.6983 9.70675C21.6961 9.77192 21.6904 9.82535 21.6838 9.86767C21.6805 9.88881 21.6769 9.90712 21.6735 9.92266C21.6718 9.93043 21.6701 9.93751 21.6685 9.94389L21.6661 9.95295L21.665 9.95709L21.6644 9.95906L21.6642 9.96003C21.664 9.9605 21.6639 9.96097 21.1833 9.82315L21.6639 9.96097C21.6274 10.0884 21.5417 10.1962 21.4257 10.2605L19.5665 11.291C19.5884 11.5245 19.5996 11.761 19.5996 12C19.5996 12.2389 19.5884 12.4754 19.5665 12.7088L21.4256 13.7393C21.5416 13.8036 21.6273 13.9114 21.6639 14.0388L21.1832 14.1767C21.6639 14.0388 21.664 14.0393 21.6641 14.0398L21.6644 14.0407L21.665 14.0427L21.6661 14.0469L21.6685 14.0559C21.6701 14.0623 21.6718 14.0694 21.6735 14.0771C21.6769 14.0927 21.6804 14.111 21.6837 14.1321C21.6903 14.1745 21.696 14.2279 21.6982 14.2931C21.7027 14.4235 21.6934 14.5997 21.651 14.8268C21.5665 15.2801 21.3501 15.9383 20.8458 16.848C20.3415 17.7578 19.8981 18.29 19.5585 18.6019C19.3883 18.7582 19.2438 18.8595 19.1308 18.9248C19.0744 18.9575 19.026 18.981 18.9867 18.9978C18.967 19.0062 18.9496 19.0129 18.9346 19.0182C18.9271 19.0209 18.9202 19.0232 18.9139 19.0252L18.905 19.028L18.9009 19.0293L18.8989 19.0298L18.8979 19.0301C18.8975 19.0302 18.897 19.0304 18.7592 18.5497L18.897 19.0304C18.7695 19.0669 18.6328 19.0513 18.5168 18.9871L16.658 17.9567C16.1821 18.323 15.6596 18.6384 15.0996 18.8847V21C15.0996 21.1326 15.0469 21.2598 14.9532 21.3536L14.5996 21C14.9532 21.3536 14.9528 21.3539 14.9525 21.3542L14.9517 21.355L14.9503 21.3564L14.9472 21.3594L14.9404 21.3659C14.9356 21.3704 14.9303 21.3753 14.9243 21.3805C14.9124 21.3911 14.8981 21.403 14.8812 21.4162C14.8474 21.4425 14.8034 21.4733 14.7475 21.5069C14.6356 21.574 14.4769 21.6513 14.2577 21.7243C13.8203 21.8702 13.1398 22 12.0996 22C11.0594 22 10.3789 21.8702 9.94149 21.7243C9.72227 21.6513 9.56365 21.574 9.45173 21.5069C9.39582 21.4733 9.35183 21.4425 9.31802 21.4162C9.30113 21.403 9.28683 21.3911 9.2749 21.3805C9.26893 21.3753 9.26356 21.3704 9.25876 21.3659L9.25199 21.3594L9.24891 21.3564L9.24746 21.355L9.24675 21.3542C9.2464 21.3539 9.24605 21.3536 9.5996 21L9.24605 21.3536C9.15228 21.2598 9.0996 21.1326 9.0996 21V18.8758C8.54142 18.6319 8.01882 18.3222 7.54162 17.9565L5.68253 18.987C5.56654 19.0513 5.42977 19.0669 5.3023 19.0304L5.44012 18.5497C5.3023 19.0304 5.30183 19.0302 5.30136 19.0301L5.3004 19.0298L5.29843 19.0292L5.29431 19.028L5.28538 19.0252C5.27911 19.0232 5.27222 19.0209 5.26472 19.0182C5.24972 19.0129 5.23233 19.0062 5.21265 18.9978C5.17326 18.9809 5.12494 18.9574 5.06849 18.9248C4.9555 18.8595 4.81104 18.7582 4.64085 18.6019C4.30125 18.29 3.85776 17.7577 3.35348 16.848C2.84919 15.9382 2.63284 15.2801 2.5483 14.8268C2.50593 14.5997 2.49659 14.4235 2.50106 14.293C2.5033 14.2279 2.50897 14.1744 2.51558 14.1321C2.51888 14.111 2.5224 14.0927 2.52583 14.0771C2.52754 14.0693 2.52923 14.0623 2.53084 14.0559L2.53321 14.0468L2.53435 14.0427L2.5349 14.0407L2.53517 14.0398C2.53531 14.0393 2.53544 14.0388 3.01607 14.1766L2.53544 14.0388C2.57199 13.9113 2.65769 13.8036 2.77367 13.7393L4.6327 12.7088C4.61079 12.4754 4.5996 12.2389 4.5996 12C4.5996 11.761 4.6108 11.5245 4.63271 11.291L2.77362 10.2605C2.65764 10.1962 2.57195 10.0885 2.53539 9.961L3.01603 9.82318C2.53539 9.961 2.53526 9.96052 2.53512 9.96005L2.53485 9.95909L2.5343 9.95711L2.53316 9.95297L2.5308 9.94391C2.52918 9.93753 2.52749 9.93046 2.52578 9.92269C2.52236 9.90714 2.51883 9.88884 2.51553 9.86769C2.50892 9.82538 2.50325 9.77194 2.50102 9.70677C2.49654 9.57633 2.50588 9.40015 2.54825 9.17299C2.63279 8.71971 2.84914 8.06158 3.35343 7.15182C3.85772 6.24206 4.3012 5.70983 4.6408 5.39793C4.81099 5.24163 4.95545 5.14034 5.06844 5.07501C5.12489 5.04237 5.17321 5.01887 5.2126 5.00204C5.23228 4.99364 5.24967 4.98693 5.26467 4.9816C5.27217 4.97893 5.27906 4.97661 5.28533 4.9746L5.29427 4.97181L5.29838 4.97058L5.30035 4.97L5.30131 4.96972C5.30178 4.96958 5.30226 4.96945 5.44007 5.45008L5.30226 4.96945C5.42973 4.9329 5.5665 4.94848 5.68248 5.01277L7.54175 6.04338C8.01892 5.67775 8.54147 5.36804 9.0996 5.1242L9.09961 3C9.09961 2.86739 9.15229 2.74022 9.24605 2.64645L9.59961 3C9.24605 2.64645 9.2464 2.6461 9.24675 2.64575L9.24746 2.64505L9.24892 2.64361L9.25199 2.64061L9.25876 2.63414C9.26357 2.62963 9.26893 2.62473 9.2749 2.61947C9.28684 2.60894 9.30114 2.59698 9.31803 2.58384C9.35184 2.55754 9.39582 2.52668 9.45173 2.49313C9.56365 2.42598 9.72228 2.34873 9.94149 2.27566C10.3789 2.12985 11.0594 2 12.0996 2C13.1398 2 13.8203 2.12985 14.2577 2.27566C14.4769 2.34873 14.6356 2.42598 14.7475 2.49313C14.8034 2.52668 14.8474 2.55754 14.8812 2.58384C14.8981 2.59698 14.9124 2.60893 14.9243 2.61947C14.9303 2.62473 14.9356 2.62963 14.9404 2.63414L14.9472 2.6406L14.9503 2.6436L14.9517 2.64505L14.9525 2.64575C14.9528 2.6461 14.9532 2.64645 14.5996 3ZM12.0997 9.5C10.719 9.5 9.5996 10.6194 9.5996 12.0001C9.5996 13.3809 10.719 14.5003 12.0997 14.5003C13.4805 14.5003 14.5999 13.3809 14.5999 12.0001C14.5999 10.6194 13.4805 9.5 12.0997 9.5ZM8.5996 12.0001C8.5996 10.0671 10.1667 8.5 12.0997 8.5C14.0328 8.5 15.5999 10.0671 15.5999 12.0001C15.5999 13.9332 14.0328 15.5003 12.0997 15.5003C10.1667 15.5003 8.5996 13.9332 8.5996 12.0001Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Sliders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M4.75 8H7.25" stroke="currentcolor"></path>
  <path d="M12.75 8H19.25" stroke="currentcolor"></path>
  <path d="M4.75 16H12.25" stroke="currentcolor"></path>
  <path d="M17.75 16H19.25" stroke="currentcolor"></path>
  <path d="M 10, 8 m -1, 0 a 1,1 0 1,0 2.25,0 a 1,1 0 1,0 -2.25,0" stroke="currentcolor"></path>
  <path d="M 15, 16 m -1, 0 a 1,1 0 1,0 2.25,0 a 1,1 0 1,0 -2.25,0" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M7.375 6.40625C6.84375 6.40625 6.375 6.875 6.375 7.40625C6.375 7.96875 6.84375 8.40625 7.375 8.40625C7.9375 8.40625 8.375 7.96875 8.375 7.40625C8.375 6.875 7.9375 6.40625 7.375 6.40625ZM7.375 15.625C6.84375 15.625 6.375 16.0625 6.375 16.625C6.375 17.1562 6.84375 17.625 7.375 17.625C7.9375 17.625 8.375 17.1562 8.375 16.625C8.375 16.0625 7.9375 15.625 7.375 15.625ZM12 17.5C11.4375 17.5 11 17.9688 11 18.5C11 19.0625 11.4375 19.5 12 19.5C12.5312 19.5 13 19.0625 13 18.5C13 17.9688 12.5312 17.5 12 17.5ZM5.5 11C4.9375 11 4.5 11.4688 4.5 12C4.5 12.5625 4.9375 13 5.5 13C6.03125 13 6.5 12.5625 6.5 12C6.5 11.4688 6.03125 11 5.5 11ZM12 4.5C11.4375 4.5 11 4.96875 11 5.5C11 6.0625 11.4375 6.5 12 6.5C12.5312 6.5 13 6.0625 13 5.5C13 4.96875 12.5312 4.5 12 4.5ZM18.5 11C17.9375 11 17.5 11.4688 17.5 12C17.5 12.5625 17.9375 13 18.5 13C19.0312 13 19.5 12.5625 19.5 12C19.5 11.4688 19.0312 11 18.5 11ZM16.5938 15.625C16.0312 15.625 15.5938 16.0625 15.5938 16.625C15.5938 17.1562 16.0312 17.625 16.5938 17.625C17.125 17.625 17.5938 17.1562 17.5938 16.625C17.5938 16.0625 17.125 15.625 16.5938 15.625Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Spinner_solid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M20 12C20 13.1562 19.75 14.25 19.3125 15.2188C19.125 15.625 18.625 15.8125 18.25 15.5938C17.9062 15.4062 17.7812 15 17.9062 14.6562C18.2812 13.8438 18.5 12.9375 18.5 12C18.5 8.65625 15.9062 5.875 12.625 5.5625C12.25 5.5 12 5.1875 12 4.8125C12 4.34375 12.375 4 12.8438 4.0625C16.8438 4.5 20 7.875 20 12Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Star_empty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M17.625 10.5312L14.2031 10.0391L12.6562 6.92188C12.5156 6.64062 12.2578 6.5 11.9766 6.5C11.7188 6.5 11.4609 6.64062 11.3203 6.92188L9.77344 10.0391L6.35156 10.5312C5.74219 10.625 5.48438 11.375 5.92969 11.8203L8.41406 14.2109L7.82812 17.6328C7.75781 18.125 8.13281 18.5 8.57812 18.5C8.69531 18.5 8.8125 18.4766 8.92969 18.4297L12 16.8125L15.0469 18.4297C15.1641 18.4766 15.2812 18.5234 15.3984 18.5234C15.8438 18.5234 16.2188 18.125 16.1484 17.6328L15.5625 14.2344L18.0469 11.8438C18.4922 11.375 18.2344 10.625 17.625 10.5312ZM14.7891 14.1641L15.3984 17.75L12.1641 16.0625C12.0469 15.9922 11.9297 15.9922 11.8125 16.0625L8.57812 17.75L9.23438 13.9531L6.46875 11.2812L10.0781 10.7422C10.1953 10.7188 10.3125 10.6484 10.3594 10.5312L12 7.25L13.6172 10.5312C13.6641 10.6484 13.7812 10.7188 13.8984 10.7422L17.5078 11.2812L14.9062 13.8359C14.8125 13.9062 14.7656 14.0234 14.7891 14.1641Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Star_filled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12.6562 6.92188L14.2031 10.0391L17.625 10.5312C18.2344 10.625 18.4922 11.375 18.0469 11.8203L15.5625 14.2109L16.1484 17.6094C16.2422 18.2188 15.6094 18.6875 15.0469 18.4062L12 16.8125L8.92969 18.4297C8.36719 18.7109 7.73438 18.2422 7.82812 17.6328L8.41406 14.2344L5.92969 11.8203C5.48438 11.375 5.74219 10.625 6.35156 10.5312L9.77344 10.0391L11.3203 6.92188C11.6016 6.35938 12.3984 6.38281 12.6562 6.92188Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M18.0312 16C17.8438 16.3438 17.5 16.5 17.1562 16.5C16.9688 16.5 16.8125 16.4688 16.6562 16.375L13 14.25V18.5C13 19.0625 12.5312 19.5 12 19.5C11.5 19.5 11 19.0625 11 18.5V14.25L7.28125 16.375C7.125 16.4688 6.96875 16.5 6.78125 16.5C6.4375 16.5 6.09375 16.3438 5.9375 16C5.65625 15.5312 5.8125 14.9375 6.28125 14.6562L9.96875 12.5L6.28125 10.375C5.8125 10.0938 5.65625 9.5 5.90625 9C6.125 8.65625 6.53125 8.46875 6.90625 8.53125C7.03125 8.53125 7.15625 8.59375 7.28125 8.65625L11 10.7812V6.5C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.5V10.7812L16.6875 8.65625C16.8125 8.59375 16.9375 8.53125 17.0625 8.53125C17.4375 8.46875 17.8438 8.65625 18.0312 9C18.2812 9.5 18.125 10.0938 17.6562 10.375L14 12.5L17.6875 14.6562C18.1562 14.9375 18.3125 15.5312 18.0312 16Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M19.2 19.2L14.25 14.25M9.75 9.75L4.8 4.8M4.8 19.2L9.75 14.25M14.25 9.75L19.2 4.8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentcolor" stroke-linecap="round"></path>`;
    }
  })}`;
});
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75Z" stroke="currentcolor"></path>
  <path d="M8.75 10.75L11.25 13L8.75 15.25" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M15 13.9062V15.125C15 15.3125 15.1875 15.5 15.375 15.5H18.5938C18.7812 15.5 19 15.3125 19 15.125V13.9062C19 13.7188 18.7812 13.5 18.5938 13.5H15.375C15.1875 13.5 15 13.7188 15 13.9062ZM10 10.9062V12.125C10 12.3125 10.1875 12.5 10.375 12.5H15.5938C15.7812 12.5 16 12.3125 16 12.125V10.9062C16 10.7188 15.7812 10.5 15.5938 10.5H10.375C10.1875 10.5 10 10.7188 10 10.9062ZM19 17.5H6V6.5C6 5.96875 5.53125 5.5 5 5.5C4.4375 5.5 4 5.96875 4 6.5V18.5C4 19.0625 4.4375 19.5 5 19.5H19C19.5312 19.5 20 19.0625 20 18.5C20 17.9688 19.5312 17.5 19 17.5ZM8.375 9.5H12.5938C12.7812 9.5 13 9.3125 13 9.125V7.90625C13 7.71875 12.7812 7.5 12.5938 7.5H8.375C8.1875 7.5 8 7.71875 8 7.90625V9.125C8 9.3125 8.1875 9.5 8.375 9.5Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Transcoder_error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9.5 7L2 11H6.875L9.5 7.5L11 9L9.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M14.5 7L22 11H17.125L14.5 7.5L13 9L14.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M22.5 11H11.5L13.5 18H22.5V11Z" fill="#F87171"></path>
  <path d="M1.5 11H12.5L10.5 18H1.5V11Z" fill="#F87171"></path>
  <path d="M16 13L19 16M19 13L16 16" stroke="currentcolor"></path>
  <path d="M5 13L8 16M8 13L5 16" stroke="currentcolor"></path>
  <path d="M12 11L10.5 15H13.5L12 11Z" fill="currentcolor"></path>
  <path d="M2 11.5H11.8371L10.1228 17.5H2V11.5Z" stroke="currentcolor"></path>
  <path d="M22 11.5H12.1629L13.8772 17.5H22V11.5Z" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Transcoder_on = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9.5 7L2 11H6.875L9.5 7.5L11 9L9.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M14.5 7L22 11H17.125L14.5 7.5L13 9L14.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M22.5 11H11.5L13.5 18H22.5V11Z" fill="#4FD1C5"></path>
  <path d="M1.5 11H12.5L10.5 18H1.5V11Z" fill="#C4B5FD"></path>
  <path d="M12 11L10.5 15H13.5L12 11Z" fill="currentcolor"></path>
  <path d="M2 11.5H11.8371L10.1228 17.5H2V11.5Z" stroke="currentcolor"></path>
  <path d="M22 11.5H12.1629L13.8772 17.5H22V11.5Z" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Transcoder_off = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M9.5 7L2 11H6.875L9.5 7.5L11 9L9.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M14.5 7L22 11H17.125L14.5 7.5L13 9L14.5 7Z" fill="currentcolor" stroke="currentcolor"></path>
  <path d="M12 11L10.5 15H13.5L12 11Z" fill="currentcolor"></path>
  <path d="M2 11.5H11.8371L10.1228 17.5H2V11.5Z" stroke="currentcolor"></path>
  <path d="M22 11.5H12.1629L13.8772 17.5H22V11.5Z" stroke="currentcolor"></path>`;
    }
  })}`;
});
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M15.875 9.5C15.6875 9.5 15.5234 9.66406 15.5 9.85156L14.8438 17.4219C14.8203 17.6094 14.6562 17.75 14.4688 17.75H9.00781C8.82031 17.75 8.65625 17.6094 8.65625 17.4219L7.97656 9.85156C7.95312 9.66406 7.78906 9.5 7.60156 9.5C7.36719 9.5 7.20312 9.71094 7.22656 9.92188L7.90625 17.4922C7.95312 18.0547 8.44531 18.5 9.00781 18.5H14.4688C15.0547 18.5 15.5234 18.0547 15.5703 17.4922L16.25 9.92188C16.2734 9.71094 16.1094 9.5 15.875 9.5ZM16.625 8H14.375L13.5781 6.96875C13.3672 6.6875 13.0391 6.5 12.6875 6.5H10.8125C10.4375 6.5 10.1094 6.6875 9.89844 6.96875L9.125 8H6.875C6.66406 8 6.5 8.1875 6.5 8.375C6.5 8.58594 6.66406 8.75 6.875 8.75H16.625C16.8125 8.75 17 8.58594 17 8.375C17 8.1875 16.8125 8 16.625 8ZM10.0625 8L10.5078 7.41406C10.5781 7.32031 10.6953 7.25 10.8125 7.25H12.6875C12.8047 7.25 12.8984 7.32031 12.9688 7.41406L13.4375 8H10.0625Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Tutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M20.1211 8.49609L12.3008 5.67969C12.1094 5.625 11.8633 5.625 11.6719 5.67969L3.85156 8.49609C3.46875 8.63281 3.25 8.96094 3.25 9.34375C3.25 9.69922 3.46875 10.0547 3.85156 10.1914L4.5625 10.4648V13.5547L3.6875 17.3555C3.66016 17.4922 3.6875 17.6289 3.76953 17.7383C3.85156 17.8203 3.98828 17.875 4.125 17.875H5.84766C5.98438 17.875 6.12109 17.8203 6.20312 17.7109C6.28516 17.6289 6.3125 17.4922 6.28516 17.3555L5.4375 13.5V10.7656L11.6719 13.0078C11.7812 13.0625 11.8906 13.0625 11.9727 13.0625C12.082 13.0625 12.1914 13.0625 12.3008 13.0078L20.1211 10.2188C20.5039 10.082 20.75 9.75391 20.75 9.34375C20.75 8.90625 20.5039 8.63281 20.1211 8.49609ZM4.67188 17L5 15.5508L5.32812 17H4.67188ZM11.9727 12.1875L6.77734 10.3281L12.1094 8.6875C12.3555 8.60547 12.4648 8.35938 12.4102 8.14062C12.3281 7.89453 12.082 7.78516 11.8633 7.83984L5.41016 9.83594L4.125 9.34375L12 6.52734L19.875 9.34375L11.9727 12.1875ZM16.4297 12.6523C16.1836 12.6797 16.0195 12.8984 16.0469 13.1445L16.3477 15.4961C16.4023 15.7422 16.2383 15.9883 15.9648 16.125C14.7617 16.6719 13.3945 16.9727 12.0273 17H11.9453C10.5781 16.9727 9.21094 16.6719 8.00781 16.125C7.73438 15.9883 7.57031 15.7422 7.625 15.4961L7.92578 13.1445C7.95312 12.8984 7.78906 12.6797 7.54297 12.6523C7.29688 12.5977 7.07812 12.7891 7.05078 13.0078L6.75 15.3867C6.66797 16.0156 7.02344 16.6172 7.65234 16.918C8.96484 17.5195 10.4414 17.8477 11.9453 17.875H12.0547C13.5312 17.8477 15.0078 17.5195 16.3203 16.918C16.9492 16.6172 17.3047 16.0156 17.2227 15.3867L16.9219 13.0078C16.8945 12.7891 16.6758 12.5977 16.4297 12.6523Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M7.8125 8.875L11.5 5.625V15.5C11.5 15.7812 11.7188 16 12 16C12.25 16 12.5 15.7812 12.5 15.5V5.625L16.1562 8.875C16.25 8.96875 16.375 9 16.5 9C16.625 9 16.75 8.96875 16.8438 8.84375C17.0312 8.65625 17.0312 8.3125 16.8125 8.15625L12.3125 4.15625C12.125 3.96875 11.8438 3.96875 11.6562 4.15625L7.15625 8.15625C6.9375 8.3125 6.9375 8.625 7.125 8.84375C7.28125 9.0625 7.625 9.0625 7.8125 8.875ZM18 14H14.5C14.2188 14 14 14.25 14 14.5C14 14.7812 14.2188 15 14.5 15H18C18.5312 15 19 15.4688 19 16V18C19 18.5625 18.5312 19 18 19H6C5.4375 19 5 18.5625 5 18V16C5 15.4688 5.4375 15 6 15H9.5C9.75 15 10 14.7812 10 14.5C10 14.25 9.75 14 9.5 14H6C4.875 14 4 14.9062 4 16V18C4 19.125 4.875 20 6 20H18C19.0938 20 20 19.125 20 18V16C20 14.9062 19.0938 14 18 14ZM17.75 17C17.75 16.5938 17.4062 16.25 17 16.25C16.5625 16.25 16.25 16.5938 16.25 17C16.25 17.4375 16.5625 17.75 17 17.75C17.4062 17.75 17.75 17.4375 17.75 17Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Usage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<circle cx="18.5" cy="13" r="1" fill="currentcolor"></circle>
  <circle cx="5.5" cy="13" r="1" fill="currentcolor"></circle>
  <circle cx="7.5" cy="9" r="1" fill="currentcolor"></circle>
  <circle cx="12" cy="7" r="1" fill="currentcolor"></circle>
  <path d="M3.06729 18.5L2.62093 18.7253C2.70596 18.8938 2.87859 19 3.06729 19V18.5ZM20.9327 18.5V19C21.1214 19 21.294 18.8938 21.3791 18.7253L20.9327 18.5ZM16.8716 9.33448C17.0564 9.12923 17.0397 8.81308 16.8345 8.62835C16.6292 8.44362 16.3131 8.46026 16.1284 8.66552L16.8716 9.33448ZM13.1284 11.9989C12.9436 12.2041 12.9603 12.5203 13.1655 12.705C13.3708 12.8897 13.6869 12.8731 13.8716 12.6678L13.1284 11.9989ZM2.5 14C2.5 8.75329 6.75329 4.5 12 4.5V3.5C6.20101 3.5 1.5 8.20101 1.5 14H2.5ZM12 4.5C17.2467 4.5 21.5 8.75329 21.5 14H22.5C22.5 8.20101 17.799 3.5 12 3.5V4.5ZM3.51365 18.2747C2.86538 16.9904 2.5 15.5386 2.5 14H1.5C1.5 15.6986 1.90374 17.3044 2.62093 18.7253L3.51365 18.2747ZM21.5 14C21.5 15.5386 21.1346 16.9904 20.4863 18.2747L21.3791 18.7253C22.0963 17.3044 22.5 15.6986 22.5 14H21.5ZM20.9327 18H3.06729V19H20.9327V18ZM13.5 14C13.5 14.8284 12.8284 15.5 12 15.5V16.5C13.3807 16.5 14.5 15.3807 14.5 14H13.5ZM12 15.5C11.1716 15.5 10.5 14.8284 10.5 14H9.5C9.5 15.3807 10.6193 16.5 12 16.5V15.5ZM10.5 14C10.5 13.1716 11.1716 12.5 12 12.5V11.5C10.6193 11.5 9.5 12.6193 9.5 14H10.5ZM12 12.5C12.8284 12.5 13.5 13.1716 13.5 14H14.5C14.5 12.6193 13.3807 11.5 12 11.5V12.5ZM13.8716 12.6678L16.8716 9.33448L16.1284 8.66552L13.1284 11.9989L13.8716 12.6678Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Vertical_ellipsis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 8C12.5312 8 13 7.5625 13 7C13 6.46875 12.5312 6 12 6C11.4375 6 11 6.46875 11 7C11 7.5625 11.4375 8 12 8ZM12 11C11.4375 11 11 11.4688 11 12C11 12.5625 11.4375 13 12 13C12.5312 13 13 12.5625 13 12C13 11.4688 12.5312 11 12 11ZM12 16C11.4375 16 11 16.4688 11 17C11 17.5625 11.4375 18 12 18C12.5312 18 13 17.5625 13 17C13 16.4688 12.5312 16 12 16Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M12 15.25C11.5625 15.25 11.25 15.5938 11.25 16C11.25 16.4375 11.5938 16.75 12 16.75C12.4062 16.75 12.7188 16.4375 12.7188 16C12.75 15.5938 12.4062 15.25 12 15.25ZM12 14C12.25 14 12.4688 13.7812 12.4688 13.5V9C12.4688 8.75 12.2188 8.5 12 8.5C11.75 8.5 11.5 8.75 11.5 9V13.5C11.5 13.7812 11.7188 14 12 14ZM19.75 16.4375L13.5 5.875C13.1875 5.34375 12.625 5.03125 12 5C11.3438 5 10.7812 5.34375 10.4688 5.875L4.21875 16.4375C3.90625 16.9688 3.90625 17.5938 4.21875 18.125C4.53125 18.6875 5.09375 19 5.75 19H18.25C18.875 19 19.4375 18.6875 19.75 18.125C20.0625 17.5938 20.0625 16.9688 19.75 16.4375ZM18.875 17.625C18.75 17.875 18.5 18 18.2188 18H5.75C5.46875 18 5.21875 17.875 5.09375 17.625C4.9375 17.4062 4.96875 17.1562 5.09375 16.9375L11.3438 6.375C11.4688 6.15625 11.7188 6 12 6C12 6 11.9688 6 12 6C12.25 6.03125 12.5 6.15625 12.625 6.375L18.875 16.9375C19 17.1562 19.0312 17.4062 18.875 17.625Z" fill="currentcolor"></path>`;
    }
  })}`;
});
const Workflow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svg, "Svg").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path d="M5.33333 13C5.33333 16.6819 8.3181 19.6667 12 19.6667C15.6819 19.6667 18.6667 16.6819 18.6667 13C18.6667 9.31811 15.6819 6.33334 12 6.33334M2 13C2 7.47716 6.47715 3 12 3C17.5228 3 22 7.47716 22 13M15.3333 13C15.3333 14.841 13.8409 16.3333 12 16.3333C10.1591 16.3333 8.66667 14.841 8.66667 13C8.66667 11.1591 10.1591 9.66667 12 9.66667C13.8409 9.66667 15.3333 11.1591 15.3333 13Z" stroke="currentcolor"></path>`;
    }
  })}`;
});
const icons = {
  add: Add,
  archives: Archives,
  "arrow-up": Arrow_up,
  "arrow-right": Arrow_right,
  ascending: Ascending,
  book: Book,
  bookmark: Bookmark,
  "calendar-plus": Calendar_plus,
  canceled: Canceled,
  chart: Chart,
  checkmark: Checkmark,
  "chevron-down": Chevron_down,
  "chevron-left": Chevron_left,
  "chevron-right": Chevron_right,
  "chevron-up": Chevron_up,
  "chevron-selector-vertical": Chevron_selector_vertical,
  clock: Clock,
  close: Close,
  "comet-solid": Comet_solid,
  comet: Comet,
  compact: Compact,
  "converter-down": Converter_down,
  "converter-up": Converter_up,
  copy: Copy,
  descending: Descending,
  download: Download,
  error: Error,
  exit: Exit,
  "eye-hide": Eye_hide,
  "eye-show": Eye_show,
  feed: Feed,
  "feedback-circle": Feedback_circle,
  feedback: Feedback,
  "file-import": File_import,
  "file-upload": File_upload,
  filter: Filter,
  "filter-solid": Filter_solid,
  graph: Graph,
  hyphen: Hyphen,
  import: Import,
  info: Info,
  "inverted-checkmark": Inverted_checkmark,
  json: Json,
  lock: Lock,
  logout: Logout,
  "namespace-switcher": Namespace_switcher,
  namespace: Namespace,
  "pin-filled": Pin_filled,
  pin: Pin,
  regions: Regions,
  relationship: Relationship,
  retention: Retention,
  retry: Retry,
  "rocket-ship": Rocket_ship,
  schedules: Schedules,
  search: Search,
  settings: Settings,
  sliders: Sliders,
  spinner: Spinner,
  "star-empty": Star_empty,
  "star-filled": Star_filled,
  summary: Summary,
  support: Support,
  "spinner-solid": Spinner_solid,
  terminal: Terminal,
  timeline: Timeline,
  "transcoder-error": Transcoder_error,
  "transcoder-on": Transcoder_on,
  "transcoder-off": Transcoder_off,
  trash: Trash,
  tutorial: Tutorial,
  upload: Upload,
  usage: Usage,
  "vertical-ellipsis": Vertical_ellipsis,
  warning: Warning,
  workflow: Workflow
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["name", "width", "height", "title"]);
  let { name } = $$props;
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { title = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  icon = icons[name];
  return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, Object.assign({}, { width }, { height }, { title }, { class: $$props.class }, $$restProps), {}, {})}` : ``}`;
});
const css = {
  code: '.button.svelte-aw3l84{position:relative;display:flex;width:-moz-fit-content;width:fit-content;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.25rem;font-family:Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-size:0.875rem;line-height:1.25rem\n}.primary.svelte-aw3l84,.secondary.svelte-aw3l84,.destructive.svelte-aw3l84,.login.svelte-aw3l84{border-width:2px;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.button.svelte-aw3l84:disabled{cursor:not-allowed\n}a.disabled.svelte-aw3l84{pointer-events:none;opacity:0.75\n}a.disabled.svelte-aw3l84:hover{--tw-border-opacity:1;border-color:rgb(39 39 42 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(39 39 42 / var(--tw-text-opacity))\n}.large.svelte-aw3l84{font-size:1.125rem;line-height:1.75rem\n}.primary.svelte-aw3l84,.login.svelte-aw3l84{--tw-border-opacity:1;border-color:rgb(24 24 27 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(24 24 27 / var(--tw-bg-opacity));background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.primary.svelte-aw3l84:hover,.login.svelte-aw3l84:hover{--tw-gradient-from:#dbeafe;--tw-gradient-to:rgb(219 234 254 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#f3e8ff;--tw-text-opacity:1;color:rgb(24 24 27 / var(--tw-text-opacity))\n}.primary.svelte-aw3l84:disabled,.login.svelte-aw3l84:disabled{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));opacity:0.75\n}.primary.svelte-aw3l84:disabled:hover,.login.svelte-aw3l84:disabled:hover{--tw-gradient-from:#18181b;--tw-gradient-to:rgb(24 24 27 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#18181b\n}.secondary.svelte-aw3l84{--tw-border-opacity:1;border-color:rgb(39 39 42 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(39 39 42 / var(--tw-text-opacity))\n}.secondary.svelte-aw3l84:hover{--tw-border-opacity:1;border-color:rgb(24 24 27 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(24 24 27 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.secondary.svelte-aw3l84:disabled{opacity:0.75\n}.secondary.svelte-aw3l84:disabled:hover{--tw-border-opacity:1;border-color:rgb(39 39 42 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(39 39 42 / var(--tw-text-opacity))\n}.destructive.svelte-aw3l84{--tw-border-opacity:1;border-color:rgb(185 28 28 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.destructive.svelte-aw3l84:hover{--tw-border-opacity:1;border-color:rgb(127 29 29 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(127 29 29 / var(--tw-bg-opacity))\n}.destructive.svelte-aw3l84:disabled{opacity:0.5\n}.destructive.svelte-aw3l84:disabled:hover{--tw-border-opacity:1;border-color:rgb(185 28 28 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))\n}.link.svelte-aw3l84{border-width:0px;background-image:none;padding:0px;font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-size:0.875rem;line-height:1.25rem;text-decoration-line:underline;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.selected.svelte-aw3l84{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));--tw-gradient-from:#dbeafe;--tw-gradient-to:rgb(219 234 254 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#f3e8ff;--tw-text-opacity:1;color:rgb(24 24 27 / var(--tw-text-opacity))\n}.login.svelte-aw3l84{margin-left:auto;margin-right:auto\n}.thin.svelte-aw3l84{height:2rem;padding-top:0.25rem;padding-bottom:0.25rem\n}.unround.svelte-aw3l84{border-radius:0px\n}.unroundLeft.svelte-aw3l84{border-top-left-radius:0px;border-bottom-left-radius:0px\n}.unroundRight.svelte-aw3l84{border-top-right-radius:0px;border-bottom-right-radius:0px\n}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  let { variant = "primary" } = $$props;
  let { thin = false } = $$props;
  let { loading = false } = $$props;
  let { href = null } = $$props;
  let { target = "_self" } = $$props;
  let { active = false } = $$props;
  let { large = false } = $$props;
  let { as = href ? "anchor" : "button" } = $$props;
  let { icon = null } = $$props;
  let { iconClass = null } = $$props;
  let { classes = $$props.class } = $$props;
  let { testId = $$props.testId } = $$props;
  let { count = 0 } = $$props;
  let { type = "button" } = $$props;
  let { unround = false } = $$props;
  let { unroundRight = false } = $$props;
  let { unroundLeft = false } = $$props;
  let { id = null } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.thin === void 0 && $$bindings.thin && thin !== void 0)
    $$bindings.thin(thin);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.testId === void 0 && $$bindings.testId && testId !== void 0)
    $$bindings.testId(testId);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.unround === void 0 && $$bindings.unround && unround !== void 0)
    $$bindings.unround(unround);
  if ($$props.unroundRight === void 0 && $$bindings.unroundRight && unroundRight !== void 0)
    $$bindings.unroundRight(unroundRight);
  if ($$props.unroundLeft === void 0 && $$bindings.unroundLeft && unroundLeft !== void 0)
    $$bindings.unroundLeft(unroundLeft);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `${as === "button" ? `<button class="${[
    "button " + escape(variant, true) + " " + escape(classes, true) + " svelte-aw3l84",
    (active ? "selected" : "") + " " + (large ? "large" : "") + " " + (thin ? "thin" : "") + " " + (unround ? "unround" : "") + " " + (unroundRight ? "unroundRight" : "") + " " + (unroundLeft ? "unroundLeft" : "")
  ].join(" ").trim()}"${add_attribute("data-testid", testId, 0)}${add_attribute("type", type, 0)} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}>${icon || loading ? `<span${add_classes((loading ? "animate-spin" : "").trim())}>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: loading ? "spinner" : icon,
      class: iconClass
    },
    {},
    {}
  )}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}
    ${count > 0 ? `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      class: "badge absolute top-0 right-0 origin-bottom-left translate-y-[-10px] translate-x-[10px]",
      type: "count"
    },
    {},
    {
      default: () => {
        return `${escape(count)}`;
      }
    }
  )}` : ``}</button>` : `<a${add_attribute("href", href, 0)} class="${[
    "button " + escape(variant, true) + " " + escape(classes, true) + " svelte-aw3l84",
    (active ? "selected" : "") + " " + (large ? "large" : "") + " " + (disabled ? "disabled" : "") + " " + (thin ? "thin" : "")
  ].join(" ").trim()}"${add_attribute("data-testid", testId, 0)}${add_attribute("target", target, 0)}${add_attribute("id", id, 0)}>${icon || loading ? `<span${add_classes((loading ? "animate-spin" : "").trim())}>${validate_component(Icon, "Icon").$$render($$result, { name: loading ? "spinner" : icon }, {}, {})}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}</a>`}`;
});
const githubMark = "/_app/immutable/assets/github-mark.7a0dd11e.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("API url grabbed from .env: ", "https://transferapi.tmprl-sa.cloud");
  let amount = 0;
  const fromAccounts = ["Checking", "Savings"];
  const toAccounts = ["Justine Morris", "Raúl Ruidíaz", "Iván Rancic", "Marta Montero"];
  $$unsubscribe_page();
  return `${validate_component(Page_title, "PageTitle").$$render(
    $$result,
    {
      title: "Money Transfer App",
      url: $page.url.href
    },
    {},
    {}
  )}
<section class="flex flex-col gap-8 items-center">${validate_component(Loading, "Loading").$$render($$result, { title: "" }, {}, {})}
	<h2 class="text-2xl flex items-center gap-1">Transfer Money</h2>
	${`<div class="sm:w-1/2 w-full border border-gray-200 p-4 rounded-md"><label for="from-account" class="block text-sm font-medium text-gray-700">From Account</label>
			<select id="from-account" class="mt-1 block w-full text-2xl">${each(fromAccounts, (account) => {
    return `<option${add_attribute("value", account, 0)}>${escape(account)}</option>`;
  })}</select></div>
		<div class="sm:w-1/2 w-full border border-gray-200 p-4 rounded-md"><label for="to-account" class="block text-sm font-medium text-gray-700">To Account</label>
			<select id="to-account" class="mt-1 block w-full text-2xl">${each(toAccounts, (account) => {
    return `<option${add_attribute("value", account, 0)}>${escape(account)}</option>`;
  })}</select></div>
		<div class="sm:w-1/2 w-full border border-gray-200 p-4 rounded-md"><label for="amount" class="block text-sm font-medium text-gray-700">Amount (In USD)</label>
			<input id="amount" type="number" class="mt-1 block w-full text-4xl"${add_attribute("value", amount, 0)}></div>
		<div class="">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Transfer`;
    }
  })}</div>
		<h6><a href="https://github.com/steveandroulakis/temporal-money-transfer" target="_blank"><img${add_attribute("src", githubMark, 0)} alt="Source Code" class="w-8 h-auto"></a></h6>`}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2bfd158c.js.map
