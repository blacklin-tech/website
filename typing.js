// <!--

// Copyright (c) 2023 - Coding Journey - https://codepen.io/Coding_Journey/pen/BEMgbX

// Permission is hereby granted, free of charge, to any person 
// obtaining a copy of this software and associated documentation 
// files (the "Software"), to deal in the Software without restriction,
//  including without limitation the rights to use, copy, modify, 
// merge, publish, distribute, sublicense, and/or sell copies of 
// the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall 
// be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.

// -->

// Minified:

const a=document.querySelector(".typed-text"),b=document.querySelector(".cursor"),c=["marketing.","legal.","design.","consulting.","social media."],d=100,e=100,f=1500;let g=0,h=0;function j(){if(h<c[g].length){if(!b.classList.contains("typing"))b.classList.add("typing");a.textContent+=c[g].charAt(h),h++,setTimeout(j,d)}else b.classList.remove("typing"),setTimeout(k,f)}function k(){if(h>0){if(!b.classList.contains("typing"))b.classList.add("typing");a.textContent=c[g].substring(0,h-1),h--,setTimeout(k,e)}else b.classList.remove("typing"),g++,g>=c.length&&(g=0),setTimeout(j,d+1100)}document.addEventListener("DOMContentLoaded",function(){c.length&&setTimeout(j,f+50)});
