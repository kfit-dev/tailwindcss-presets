
const path = require('path')
const tailwind = require('tailwindcss')
const postcss = require('postcss')
const faveTailwindPreset = require('.')

let html = String.raw
let css = String.raw


function run(config, plugin = tailwind) {
    let { currentTestName } = expect.getState()
    config = {
      ...{ presets: [faveTailwindPreset], corePlugins: { preflight: false } },
      ...config,
    }
  
    return postcss(plugin(config)).process(
      ['@tailwind base;', '@tailwind components;', '@tailwind utilities'].join('\n'),
      {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
      }
    )
  }

test('specificity', async () => {
    let config = {
        content: [{ raw: html`
        <div class="
            text-primary bg-primary border-primary shadow-primary
            text-yellow-400 bg-yellow-400 border-yellow-400 shadow-yellow-400
            text-green-500 bg-green-500 border-green-500 shadow-green-500
            text-white bg-white border-white  shadow-white
            text-slate-100 bg-slate-100 bg-slate-100 shadow-slate-100
            text-slate-700 bg-slate-700 bg-slate-700 shadow-slate-700
            text-neutral-100 bg-neutral-100 bg-neutral-100 shadow-neutral-100
            text-neutral-300 bg-neutral-300 bg-neutral-300 shadow-neutral-300
            text-neutral-400 bg-neutral-400 bg-neutral-400 shadow-neutral-400
            text-neutral-500 bg-neutral-500 bg-neutral-500 shadow-neutral-500
            text-neutral-700 bg-neutral-700 bg-neutral-700 shadow-neutral-700
            shadow-sm
            shadow
            shadow-md
            shadow-lg
            shadow-xl
            shadow-2xl
            shadow-inner
            h1
            h2
            h3
            body
            caption
            title
        "></div>` }],
    }
  
    return run(config).then((result) => {
      //console.log(result);
      expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
         --tw-translate-x: 0;
         --tw-translate-y: 0;
         --tw-rotate: 0;
         --tw-skew-x: 0;
         --tw-skew-y: 0;
         --tw-scale-x: 1;
         --tw-scale-y: 1;
         --tw-pan-x: ;
         --tw-pan-y: ;
         --tw-pinch-zoom: ;
         --tw-scroll-snap-strictness: proximity;
         --tw-ordinal: ;
         --tw-slashed-zero: ;
         --tw-numeric-figure: ;
         --tw-numeric-spacing: ;
         --tw-numeric-fraction: ;
         --tw-ring-inset: ;
         --tw-ring-offset-width: 0px;
         --tw-ring-offset-color: #fff;
         --tw-ring-color: rgb(59 130 246 / 0.5);
         --tw-ring-offset-shadow: 0 0 #0000;
         --tw-ring-shadow: 0 0 #0000;
         --tw-shadow: 0 0 #0000;
         --tw-shadow-colored: 0 0 #0000;
         --tw-blur: ;
         --tw-brightness: ;
         --tw-contrast: ;
         --tw-grayscale: ;
         --tw-hue-rotate: ;
         --tw-invert: ;
         --tw-saturate: ;
         --tw-sepia: ;
         --tw-drop-shadow: ;
         --tw-backdrop-blur: ;
         --tw-backdrop-brightness: ;
         --tw-backdrop-contrast: ;
         --tw-backdrop-grayscale: ;
         --tw-backdrop-hue-rotate: ;
         --tw-backdrop-invert: ;
         --tw-backdrop-opacity: ;
         --tw-backdrop-saturate: ;
         --tw-backdrop-sepia: ;
      }
        .border-primary {
            --tw-border-opacity: 1;
            border-color: rgb(222 32 106 / var(--tw-border-opacity));
        }
        .border-yellow-400 {
            --tw-border-opacity: 1;
            border-color: rgb(251 191 36 / var(--tw-border-opacity));
        }
        .border-green-500 {
            --tw-border-opacity: 1;
            border-color: rgb(16 185 129 / var(--tw-border-opacity));
        }
        .border-white {
             --tw-border-opacity: 1;
             border-color: rgb(255 255 255 / var(--tw-border-opacity));
        }
        .bg-primary {
            --tw-bg-opacity: 1;
            background-color: rgb(222 32 106 / var(--tw-bg-opacity));
        }
        .bg-yellow-400 {
            --tw-bg-opacity: 1;
            background-color: rgb(251 191 36 / var(--tw-bg-opacity));
        }
        .bg-green-500 {
            --tw-bg-opacity: 1;
            background-color: rgb(16 185 129 / var(--tw-bg-opacity));
        }
        .bg-white {
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .bg-slate-100 {
            --tw-bg-opacity: 1;
            background-color: rgb(241 245 249 / var(--tw-bg-opacity));
        }
        .bg-slate-700 {
            --tw-bg-opacity: 1;
            background-color: rgb(51 65 85 / var(--tw-bg-opacity));
        }
        .bg-neutral-100 {
            --tw-bg-opacity: 1;
            background-color: rgb(245 245 245 / var(--tw-bg-opacity));
        }
        .bg-neutral-300 {
            --tw-bg-opacity: 1;
            background-color: rgb(212 212 212 / var(--tw-bg-opacity));
        }
        .bg-neutral-400 {
            --tw-bg-opacity: 1;
            background-color: rgb(163 163 163 / var(--tw-bg-opacity));
        }
        .bg-neutral-500 {
            --tw-bg-opacity: 1;
            background-color: rgb(115 115 115 / var(--tw-bg-opacity));
        }
        .bg-neutral-700 {
            --tw-bg-opacity: 1;
            background-color: rgb(64 64 64 / var(--tw-bg-opacity));
        }
        .text-primary {
            --tw-text-opacity: 1;
            color: rgb(222 32 106 / var(--tw-text-opacity));
        }
        .text-yellow-400 {
            --tw-text-opacity: 1;
            color: rgb(251 191 36 / var(--tw-text-opacity));
        }
        .text-green-500 {
            --tw-text-opacity: 1;
            color: rgb(16 185 129 / var(--tw-text-opacity));
        }
        .text-white {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .text-slate-100 {
            --tw-text-opacity: 1;
            color: rgb(241 245 249 / var(--tw-text-opacity));
        }
        .text-slate-700 {
            --tw-text-opacity: 1;
            color: rgb(51 65 85 / var(--tw-text-opacity));
        }
        .text-neutral-100 {
            --tw-text-opacity: 1;
            color: rgb(245 245 245 / var(--tw-text-opacity));
        }
        .text-neutral-300 {
            --tw-text-opacity: 1;
            color: rgb(212 212 212 / var(--tw-text-opacity));
        }
        .text-neutral-400 {
            --tw-text-opacity: 1;
            color: rgb(163 163 163 / var(--tw-text-opacity));
        }
        .text-neutral-500 {
            --tw-text-opacity: 1;
            color: rgb(115 115 115 / var(--tw-text-opacity));
        }
        .text-neutral-700 {
            --tw-text-opacity: 1;
            color: rgb(64 64 64 / var(--tw-text-opacity));
        }
        .shadow-sm {
            --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow {
            --tw-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
            --tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-md {
            --tw-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
            --tw-shadow-colored: 0px 4px 6px -1px var(--tw-shadow-color), 0px 2px 4px -1px var(--tw-shadow-color); 
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-lg {
            --tw-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
            --tw-shadow-colored: 0px 10px 15px -3px var(--tw-shadow-color), 0px 4px 6px -2px var(--tw-shadow-color);        
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-xl {
            --tw-shadow:  0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
            --tw-shadow-colored: 0px 20px 25px -5px var(--tw-shadow-color), 0px 10px 10px -5px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-2xl {
            --tw-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
            --tw-shadow-colored: 0px 25px 50px -12px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-inner {
            --tw-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
            --tw-shadow-colored: inset 0px 2px 4px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-primary {
            --tw-shadow-color: rgb(222, 32, 106);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-yellow-400 {
            --tw-shadow-color: rgb(251, 191, 36);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-green-500 {
            --tw-shadow-color: rgb(16, 185, 129);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-white {
            --tw-shadow-color: #ffffff;
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-slate-100 {
            --tw-shadow-color: rgb(241, 245, 249);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-slate-700 {
            --tw-shadow-color: rgb(51, 65, 85);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-neutral-100 {
            --tw-shadow-color: rgb(245, 245, 245);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-neutral-300 {
            --tw-shadow-color: rgb(212, 212, 212);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-neutral-400 {
            --tw-shadow-color: rgb(163, 163, 163);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-neutral-500 {
            --tw-shadow-color: rgb(115, 115, 115);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .shadow-neutral-700 {
            --tw-shadow-color: rgb(64, 64, 64);
            --tw-shadow: var(--tw-shadow-colored);
        }
        .h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }
        .h2 {
            font-size: 1rem;
            font-weight: 700;
        }
        .h3 {
            font-size: 0.75rem;
            font-weight: 600;
        }
        .body {
            font-size: 1rem;
            font-weight: 400;
        }
        .caption {
            font-size: 0.875rem;
            font-weight: 400;
        }
        .title {
            font-size: 1.5rem;
            font-weight: 700;
        }
      `)
    })
  })