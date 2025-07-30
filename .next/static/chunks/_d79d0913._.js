(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/splashcursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Splashcursor({ SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 2, PRESSURE = 0.1, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = 0.2, SPLAT_FORCE = 6000, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
    r: 0.5,
    g: 0,
    b: 0
}, TRANSPARENT = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Splashcursor.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            function pointerPrototype() {
                this.id = -1;
                this.texcoordX = 0;
                this.texcoordY = 0;
                this.prevTexcoordX = 0;
                this.prevTexcoordY = 0;
                this.deltaX = 0;
                this.deltaY = 0;
                this.down = false;
                this.moved = false;
                this.color = [
                    0,
                    0,
                    0
                ];
            }
            let config = {
                SIM_RESOLUTION,
                DYE_RESOLUTION,
                CAPTURE_RESOLUTION,
                DENSITY_DISSIPATION,
                VELOCITY_DISSIPATION,
                PRESSURE,
                PRESSURE_ITERATIONS,
                CURL,
                SPLAT_RADIUS,
                SPLAT_FORCE,
                SHADING,
                COLOR_UPDATE_SPEED,
                PAUSED: false,
                BACK_COLOR,
                TRANSPARENT
            };
            let pointers = [
                new pointerPrototype()
            ];
            const { gl, ext } = getWebGLContext(canvas);
            if (!ext.supportLinearFiltering) {
                config.DYE_RESOLUTION = 256;
                config.SHADING = false;
            }
            function getWebGLContext(canvas) {
                const params = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false
                };
                // Try WebGL2 first
                let gl = canvas.getContext('webgl2', params);
                const isWebGL2 = !!gl;
                // Fallback to WebGL1 if WebGL2 is not available
                if (!isWebGL2) {
                    gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
                }
                if (!gl) {
                    throw new Error('WebGL not supported');
                }
                let halfFloat = null;
                let supportLinearFiltering = null;
                if (isWebGL2) {
                    const gl2 = gl;
                    gl2.getExtension('EXT_color_buffer_float');
                    supportLinearFiltering = gl2.getExtension('OES_texture_float_linear');
                } else {
                    const gl1 = gl;
                    halfFloat = gl1.getExtension('OES_texture_half_float');
                    supportLinearFiltering = gl1.getExtension('OES_texture_half_float_linear');
                }
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat?.HALF_FLOAT_OES;
                let formatRGBA;
                let formatRG;
                let formatR;
                if (isWebGL2) {
                    const gl2 = gl;
                    formatRGBA = getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl2, gl2.RG16F, gl2.RG, halfFloatTexType);
                    formatR = getSupportedFormat(gl2, gl2.R16F, gl2.RED, halfFloatTexType);
                } else {
                    const gl1 = gl;
                    formatRGBA = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType);
                    formatR = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType);
                }
                return {
                    gl,
                    ext: {
                        formatRGBA,
                        formatRG,
                        formatR,
                        halfFloatTexType,
                        supportLinearFiltering
                    }
                };
            }
            function getSupportedFormat(gl, internalFormat, format, type) {
                if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                    // Check if it's WebGL2 context using instanceof
                    if (gl instanceof WebGL2RenderingContext) {
                        switch(internalFormat){
                            case gl.R16F:
                                return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                            case gl.RG16F:
                                return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                            default:
                                return null;
                        }
                    } else {
                        // WebGL1 fallback - handle legacy formats
                        // You might want to return alternative formats or null
                        return null;
                    }
                }
                return {
                    internalFormat,
                    format
                };
            }
            function supportRenderTextureFormat(gl, internalFormat, format, type) {
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
                const fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                return status === gl.FRAMEBUFFER_COMPLETE;
            }
            class Material {
                vertexShader;
                fragmentShaderSource;
                programs;
                activeProgram;
                uniforms;
                constructor(vertexShader, fragmentShaderSource){
                    this.vertexShader = vertexShader;
                    this.fragmentShaderSource = fragmentShaderSource;
                    this.programs = {}; // Changed from [] to {}
                    this.activeProgram = null;
                    this.uniforms = {}; // Changed from [] to {}
                }
                setKeywords(keywords) {
                    let hash = 0;
                    for(let i = 0; i < keywords.length; i++)hash += hashCode(keywords[i]);
                    let program = this.programs[hash];
                    if (program == null) {
                        let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                        program = createProgram(this.vertexShader, fragmentShader);
                        this.programs[hash] = program;
                    }
                    if (program === this.activeProgram) return;
                    this.uniforms = getUniforms(program);
                    this.activeProgram = program;
                }
                bind() {
                    gl.useProgram(this.activeProgram);
                }
            }
            class Program {
                uniforms;
                program;
                constructor(vertexShader, fragmentShader){
                    this.uniforms = {};
                    this.program = createProgram(vertexShader, fragmentShader);
                    this.uniforms = getUniforms(this.program);
                }
                bind() {
                    gl.useProgram(this.program);
                }
            }
            function createProgram(vertexShader, fragmentShader) {
                let program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
                return program;
            }
            function getUniforms(program) {
                let uniforms = {}; // Changed from [] to {}
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for(let i = 0; i < uniformCount; i++){
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }
            function compileShader(type, source, keywords) {
                source = addKeywords(source, keywords);
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
                return shader;
            }
            function addKeywords(source, keywords) {
                if (!keywords) return source;
                let keywordsString = '';
                keywords.forEach({
                    "Splashcursor.useEffect.addKeywords": (keyword)=>{
                        keywordsString += '#define ' + keyword + '\n';
                    }
                }["Splashcursor.useEffect.addKeywords"]);
                return keywordsString + source;
            }
            const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
           precision highp float;
           attribute vec2 aPosition;
           varying vec2 vUv;
           varying vec2 vL;
           varying vec2 vR;
           varying vec2 vT;
           varying vec2 vB;
           uniform vec2 texelSize;

           void main () {
               vUv = aPosition * 0.5 + 0.5;
               vL = vUv - vec2(texelSize.x, 0.0);
               vR = vUv + vec2(texelSize.x, 0.0);
               vT = vUv + vec2(0.0, texelSize.y);
               vB = vUv - vec2(0.0, texelSize.y);
               gl_Position = vec4(aPosition, 0.0, 1.0);
           }
         `);
            const copyShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           uniform sampler2D uTexture;

           void main () {
               gl_FragColor = texture2D(uTexture, vUv);
           }
         `);
            const clearShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           uniform sampler2D uTexture;
           uniform float value;

           void main () {
               gl_FragColor = value * texture2D(uTexture, vUv);
           }
         `);
            const displayShaderSource = `
         precision highp float;
         precision highp sampler2D;
         varying vec2 vUv;
         varying vec2 vL;
         varying vec2 vR;
         varying vec2 vT;
         varying vec2 vB;
         uniform sampler2D uTexture;
         uniform sampler2D uDithering;
         uniform vec2 ditherScale;
         uniform vec2 texelSize;

         vec3 linearToGamma (vec3 color) {
             color = max(color, vec3(0));
             return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
         }

         void main () {
             vec3 c = texture2D(uTexture, vUv).rgb;
             #ifdef SHADING
                 vec3 lc = texture2D(uTexture, vL).rgb;
                 vec3 rc = texture2D(uTexture, vR).rgb;
                 vec3 tc = texture2D(uTexture, vT).rgb;
                 vec3 bc = texture2D(uTexture, vB).rgb;

                 float dx = length(rc) - length(lc);
                 float dy = length(tc) - length(bc);

                 vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                 vec3 l = vec3(0.0, 0.0, 1.0);

                 float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                 c *= diffuse;
             #endif

             float a = max(c.r, max(c.g, c.b));
             gl_FragColor = vec4(c, a);
         }
       `;
            const splatShader = compileShader(gl.FRAGMENT_SHADER, `
           precision highp float;
           precision highp sampler2D;
           varying vec2 vUv;
           uniform sampler2D uTarget;
           uniform float aspectRatio;
           uniform vec3 color;
           uniform vec2 point;
           uniform float radius;

           void main () {
               vec2 p = vUv - point.xy;
               p.x *= aspectRatio;
               vec3 splat = exp(-dot(p, p) / radius) * color;
               vec3 base = texture2D(uTarget, vUv).xyz;
               gl_FragColor = vec4(base + splat, 1.0);
           }
         `);
            const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
           precision highp float;
           precision highp sampler2D;
           varying vec2 vUv;
           uniform sampler2D uVelocity;
           uniform sampler2D uSource;
           uniform vec2 texelSize;
           uniform vec2 dyeTexelSize;
           uniform float dt;
           uniform float dissipation;

           vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
               vec2 st = uv / tsize - 0.5;
               vec2 iuv = floor(st);
               vec2 fuv = fract(st);

               vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
               vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
               vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
               vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

               return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
           }

           void main () {
               #ifdef MANUAL_FILTERING
                   vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                   vec4 result = bilerp(uSource, coord, dyeTexelSize);
               #else
                   vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                   vec4 result = texture2D(uSource, coord);
               #endif
               float decay = 1.0 + dissipation * dt;
               gl_FragColor = result / decay;
           }
         `, ext.supportLinearFiltering ? null : [
                'MANUAL_FILTERING'
            ]);
            const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           varying highp vec2 vL;
           varying highp vec2 vR;
           varying highp vec2 vT;
           varying highp vec2 vB;
           uniform sampler2D uVelocity;

           void main () {
               float L = texture2D(uVelocity, vL).x;
               float R = texture2D(uVelocity, vR).x;
               float T = texture2D(uVelocity, vT).y;
               float B = texture2D(uVelocity, vB).y;

               vec2 C = texture2D(uVelocity, vUv).xy;
               if (vL.x < 0.0) { L = -C.x; }
               if (vR.x > 1.0) { R = -C.x; }
               if (vT.y > 1.0) { T = -C.y; }
               if (vB.y < 0.0) { B = -C.y; }

               float div = 0.5 * (R - L + T - B);
               gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
           }
         `);
            const curlShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           varying highp vec2 vL;
           varying highp vec2 vR;
           varying highp vec2 vT;
           varying highp vec2 vB;
           uniform sampler2D uVelocity;

           void main () {
               float L = texture2D(uVelocity, vL).y;
               float R = texture2D(uVelocity, vR).y;
               float T = texture2D(uVelocity, vT).x;
               float B = texture2D(uVelocity, vB).x;
               float vorticity = R - L - T + B;
               gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
           }
         `);
            const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
           precision highp float;
           precision highp sampler2D;
           varying vec2 vUv;
           varying vec2 vL;
           varying vec2 vR;
           varying vec2 vT;
           varying vec2 vB;
           uniform sampler2D uVelocity;
           uniform sampler2D uCurl;
           uniform float curl;
           uniform float dt;

           void main () {
               float L = texture2D(uCurl, vL).x;
               float R = texture2D(uCurl, vR).x;
               float T = texture2D(uCurl, vT).x;
               float B = texture2D(uCurl, vB).x;
               float C = texture2D(uCurl, vUv).x;

               vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
               force /= length(force) + 0.0001;
               force *= curl * C;
               force.y *= -1.0;

               vec2 velocity = texture2D(uVelocity, vUv).xy;
               velocity += force * dt;
               velocity = min(max(velocity, -1000.0), 1000.0);
               gl_FragColor = vec4(velocity, 0.0, 1.0);
           }
         `);
            const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           varying highp vec2 vL;
           varying highp vec2 vR;
           varying highp vec2 vT;
           varying highp vec2 vB;
           uniform sampler2D uPressure;
           uniform sampler2D uDivergence;

           void main () {
               float L = texture2D(uPressure, vL).x;
               float R = texture2D(uPressure, vR).x;
               float T = texture2D(uPressure, vT).x;
               float B = texture2D(uPressure, vB).x;
               float C = texture2D(uPressure, vUv).x;
               float divergence = texture2D(uDivergence, vUv).x;
               float pressure = (L + R + B + T - divergence) * 0.25;
               gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
           }
         `);
            const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
           precision mediump float;
           precision mediump sampler2D;
           varying highp vec2 vUv;
           varying highp vec2 vL;
           varying highp vec2 vR;
           varying highp vec2 vT;
           varying highp vec2 vB;
           uniform sampler2D uPressure;
           uniform sampler2D uVelocity;

           void main () {
               float L = texture2D(uPressure, vL).x;
               float R = texture2D(uPressure, vR).x;
               float T = texture2D(uPressure, vT).x;
               float B = texture2D(uPressure, vB).x;
               vec2 velocity = texture2D(uVelocity, vUv).xy;
               velocity.xy -= vec2(R - L, T - B);
               gl_FragColor = vec4(velocity, 0.0, 1.0);
           }
         `);
            const blit = ({
                "Splashcursor.useEffect.blit": ()=>{
                    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                        -1,
                        -1,
                        -1,
                        1,
                        1,
                        1,
                        1,
                        -1
                    ]), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                        0,
                        1,
                        2,
                        0,
                        2,
                        3
                    ]), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(0);
                    return ({
                        "Splashcursor.useEffect.blit": (target, clear = false)=>{
                            if (target == null) {
                                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                            } else {
                                gl.viewport(0, 0, target.width, target.height);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                            }
                            if (clear) {
                                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                                gl.clear(gl.COLOR_BUFFER_BIT);
                            }
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                        }
                    })["Splashcursor.useEffect.blit"];
                }
            })["Splashcursor.useEffect.blit"]();
            let dye, velocity, divergence, curl, pressure;
            const copyProgram = new Program(baseVertexShader, copyShader);
            const clearProgram = new Program(baseVertexShader, clearShader);
            const splatProgram = new Program(baseVertexShader, splatShader);
            const advectionProgram = new Program(baseVertexShader, advectionShader);
            const divergenceProgram = new Program(baseVertexShader, divergenceShader);
            const curlProgram = new Program(baseVertexShader, curlShader);
            const vorticityProgram = new Program(baseVertexShader, vorticityShader);
            const pressureProgram = new Program(baseVertexShader, pressureShader);
            const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
            const displayMaterial = new Material(baseVertexShader, displayShaderSource);
            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = ext.formatRGBA;
                const rg = ext.formatRG;
                const r = ext.formatR;
                const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
                gl.disable(gl.BLEND);
                if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
            }
            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                let texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
                let fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);
                let texelSizeX = 1.0 / w;
                let texelSizeY = 1.0 / h;
                return {
                    texture,
                    fbo,
                    width: w,
                    height: h,
                    texelSizeX,
                    texelSizeY,
                    attach (id) {
                        gl.activeTexture(gl.TEXTURE0 + id);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        return id;
                    }
                };
            }
            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                let fbo2 = createFBO(w, h, internalFormat, format, type, param);
                return {
                    width: w,
                    height: h,
                    texelSizeX: fbo1.texelSizeX,
                    texelSizeY: fbo1.texelSizeY,
                    get read () {
                        return fbo1;
                    },
                    set read (value){
                        fbo1 = value;
                    },
                    get write () {
                        return fbo2;
                    },
                    set write (value){
                        fbo2 = value;
                    },
                    swap () {
                        let temp = fbo1;
                        fbo1 = fbo2;
                        fbo2 = temp;
                    }
                };
            }
            function resizeFBO(target, w, h, internalFormat, format, type, param) {
                let newFBO = createFBO(w, h, internalFormat, format, type, param);
                copyProgram.bind();
                gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
                blit(newFBO);
                return newFBO;
            }
            function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                if (target.width === w && target.height === h) return target;
                target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
                target.write = createFBO(w, h, internalFormat, format, type, param);
                target.width = w;
                target.height = h;
                target.texelSizeX = 1.0 / w;
                target.texelSizeY = 1.0 / h;
                return target;
            }
            function updateKeywords() {
                let displayKeywords = [];
                if (config.SHADING) displayKeywords.push('SHADING');
                displayMaterial.setKeywords(displayKeywords);
            }
            updateKeywords();
            initFramebuffers();
            let lastUpdateTime = Date.now();
            let colorUpdateTimer = 0.0;
            function updateFrame() {
                const dt = calcDeltaTime();
                if (resizeCanvas()) initFramebuffers();
                updateColors(dt);
                applyInputs();
                step(dt);
                render(null);
                requestAnimationFrame(updateFrame);
            }
            function calcDeltaTime() {
                let now = Date.now();
                let dt = (now - lastUpdateTime) / 1000;
                dt = Math.min(dt, 0.016666);
                lastUpdateTime = now;
                return dt;
            }
            function resizeCanvas() {
                let width = scaleByPixelRatio(canvas.clientWidth);
                let height = scaleByPixelRatio(canvas.clientHeight);
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    return true;
                }
                return false;
            }
            function updateColors(dt) {
                colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
                if (colorUpdateTimer >= 1) {
                    colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
                    pointers.forEach({
                        "Splashcursor.useEffect.updateColors": (p)=>{
                            p.color = generateColor();
                        }
                    }["Splashcursor.useEffect.updateColors"]);
                }
            }
            function applyInputs() {
                pointers.forEach({
                    "Splashcursor.useEffect.applyInputs": (p)=>{
                        if (p.moved) {
                            p.moved = false;
                            splatPointer(p);
                        }
                    }
                }["Splashcursor.useEffect.applyInputs"]);
            }
            function step(dt) {
                gl.disable(gl.BLEND);
                curlProgram.bind();
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);
                vorticityProgram.bind();
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();
                divergenceProgram.bind();
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);
                clearProgram.bind();
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();
                pressureProgram.bind();
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for(let i = 0; i < config.PRESSURE_ITERATIONS; i++){
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }
                gradienSubtractProgram.bind();
                gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();
                advectionProgram.bind();
                gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
                let velocityId = velocity.read.attach(0);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                gl.uniform1f(advectionProgram.uniforms.dt, dt);
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                blit(velocity.write);
                velocity.swap();
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                blit(dye.write);
                dye.swap();
            }
            function render(target) {
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                drawDisplay(target);
            }
            function drawDisplay(target) {
                let width = target == null ? gl.drawingBufferWidth : target.width;
                let height = target == null ? gl.drawingBufferHeight : target.height;
                displayMaterial.bind();
                if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
                gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
                blit(target);
            }
            function splatPointer(pointer) {
                let dx = pointer.deltaX * config.SPLAT_FORCE;
                let dy = pointer.deltaY * config.SPLAT_FORCE;
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
            }
            function clickSplat(pointer) {
                const color = generateColor();
                color.r *= 10.0;
                color.g *= 10.0;
                color.b *= 10.0;
                let dx = 10 * (Math.random() - 0.5);
                let dy = 30 * (Math.random() - 0.5);
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
            }
            function splat(x, y, dx, dy, color) {
                splatProgram.bind();
                gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                gl.uniform2f(splatProgram.uniforms.point, x, y);
                gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
                gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
                blit(velocity.write);
                velocity.swap();
                gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                blit(dye.write);
                dye.swap();
            }
            function correctRadius(radius) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) radius *= aspectRatio;
                return radius;
            }
            function updatePointerDownData(pointer, id, posX, posY) {
                pointer.id = id;
                pointer.down = true;
                pointer.moved = false;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.deltaX = 0;
                pointer.deltaY = 0;
                pointer.color = generateColor();
            }
            function updatePointerMoveData(pointer, posX, posY, color) {
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
                pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
                pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
                pointer.color = color;
            }
            function updatePointerUpData(pointer) {
                pointer.down = false;
            }
            function correctDeltaX(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio < 1) delta *= aspectRatio;
                return delta;
            }
            function correctDeltaY(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) delta /= aspectRatio;
                return delta;
            }
            function generateColor() {
                let c = HSVtoRGB(Math.random(), 1.0, 1.0);
                c.r *= 0.15;
                c.g *= 0.15;
                c.b *= 0.15;
                return c;
            }
            function HSVtoRGB(h, s, v) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch(i % 6){
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                    default:
                        r = g = b = 0;
                        break;
                }
                return {
                    r,
                    g,
                    b
                };
            }
            function wrap(value1, min, max) {
                const range = max - min;
                if (range === 0) return min;
                return (value1 - min) % range + min;
            }
            function getResolution(resolution) {
                let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
                if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
                const min = Math.round(resolution);
                const max = Math.round(resolution * aspectRatio);
                if (gl.drawingBufferWidth > gl.drawingBufferHeight) return {
                    width: max,
                    height: min
                };
                else return {
                    width: min,
                    height: max
                };
            }
            function scaleByPixelRatio(input) {
                const pixelRatio = window.devicePixelRatio || 1;
                return Math.floor(input * pixelRatio);
            }
            function hashCode(s) {
                if (s.length === 0) return 0;
                let hash = 0;
                for(let i = 0; i < s.length; i++){
                    hash = (hash << 5) - hash + s.charCodeAt(i);
                    hash |= 0;
                }
                return hash;
            }
            window.addEventListener('mousedown', {
                "Splashcursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    updatePointerDownData(pointer, -1, posX, posY);
                    clickSplat(pointer);
                }
            }["Splashcursor.useEffect"]);
            document.body.addEventListener('mousemove', function handleFirstMouseMove(e) {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                let color = generateColor();
                updateFrame();
                updatePointerMoveData(pointer, posX, posY, color);
                document.body.removeEventListener('mousemove', handleFirstMouseMove);
            });
            window.addEventListener('mousemove', {
                "Splashcursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    let color = pointer.color;
                    updatePointerMoveData(pointer, posX, posY, color);
                }
            }["Splashcursor.useEffect"]);
            document.body.addEventListener('touchstart', function handleFirstTouchStart(e) {
                const touches = e.targetTouches;
                let pointer = pointers[0];
                for(let i = 0; i < touches.length; i++){
                    let posX = scaleByPixelRatio(touches[i].clientX);
                    let posY = scaleByPixelRatio(touches[i].clientY);
                    updateFrame();
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
                document.body.removeEventListener('touchstart', handleFirstTouchStart);
            });
            window.addEventListener('touchstart', {
                "Splashcursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                    }
                }
            }["Splashcursor.useEffect"]);
            window.addEventListener('touchmove', {
                "Splashcursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerMoveData(pointer, posX, posY, pointer.color);
                    }
                }
            }["Splashcursor.useEffect"], false);
            window.addEventListener('touchend', {
                "Splashcursor.useEffect": (e)=>{
                    const touches = e.changedTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        updatePointerUpData(pointer);
                    }
                }
            }["Splashcursor.useEffect"]);
            updateFrame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Splashcursor.useEffect"], [
        SIM_RESOLUTION,
        DYE_RESOLUTION,
        CAPTURE_RESOLUTION,
        DENSITY_DISSIPATION,
        VELOCITY_DISSIPATION,
        PRESSURE,
        PRESSURE_ITERATIONS,
        CURL,
        SPLAT_RADIUS,
        SPLAT_FORCE,
        SHADING,
        COLOR_UPDATE_SPEED,
        BACK_COLOR,
        TRANSPARENT
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 50,
            pointerEvents: 'none',
            width: '100%',
            height: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            id: "fluid",
            style: {
                width: '100vw',
                height: '100vh',
                display: 'block'
            }
        }, void 0, false, {
            fileName: "[project]/components/splashcursor.tsx",
            lineNumber: 1251,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/splashcursor.tsx",
        lineNumber: 1240,
        columnNumber: 5
    }, this);
}
_s(Splashcursor, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Splashcursor;
const __TURBOPACK__default__export__ = Splashcursor;
var _c;
__turbopack_context__.k.register(_c, "Splashcursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_d79d0913._.js.map