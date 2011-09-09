/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @path: chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-242.js;
 * @description: Object.defineProperties - TypeError is thrown if 'O' is an Array, 'P' is an array index named property that already exists on 'O' is accessor property with  [[Configurable]] false, 'desc' is accessor descriptor, the [[Set]] field of 'desc' is present, and the [[Set]] field of 'desc' is an object and the [[Set]] attribute value of 'P' is undefined   (15.4.5.1 step 4.c);
 */


function testcase() {
        var arr = [];

        function set_fun(value) {
            arr.setVerifyHelpProp = value;
        }
        Object.defineProperty(arr, "1", {
            set: set_fun
        });

        try {
            Object.defineProperties(arr, {
                "1": {
                    set: undefined
                }
            });

            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && accessorPropertyAttributesAreCorrect(arr, "1", undefined, set_fun, "setVerifyHelpProp", false, false);
        }
    }
runTestCase(testcase);
