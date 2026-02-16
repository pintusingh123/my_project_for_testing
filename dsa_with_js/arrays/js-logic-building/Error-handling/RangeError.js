//RangeError.js
const name = "akash ";
// console.log(name);
// const repeated = name.repeat(-1);
 const repeated = name.repeat(10);
// console.log(repeated);

// -1 time repeated is not acceptable ----
// RangeError: Invalid count value: -1
//     at String.repeat (<anonymous>)
//     at Object.<anonymous> (C:\Users\aaa\OneDrive\Desktop\test\js-logic-building\Error-handling\RangeError.js:4:23)
//     at Module._compile (node:internal/modules/cjs/loader:1688:14)    
//     at Object..js (node:internal/modules/cjs/loader:1820:10)
//     at Module.load (node:internal/modules/cjs/loader:1423:32)        
//     at Function._load (node:internal/modules/cjs/loader:1246:12)     
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)    
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)      
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.18.0

function checkage(age){
    if(age < 0 || age > 120){
        throw new RangeError("age should be between 0 and 120")
    }
    console.log("perfect age ");
    
}
// checkage(230)

// age is out of range 
// RangeError: age should be between 0 and 120
//     at checkage (C:\Users\aa\OneDrie\Desktop\tst\js-lgic-buildng\Error-handlig\RangeError.js:25:15)
//     at Object.<anonymous> (C:\Users\aaa\OneDrive\Desktop\test\js-logic-building\Error-handling\RangeError.js:30:1)
//     at Module._compile (node:internal/modules/cjs/loader:1688:14)    
//     at Object..js (node:internal/modules/cjs/loader:1820:10)
//     at Module.load (node:internal/modules/cjs/loader:1423:32)        
//     at Function._load (node:internal/modules/cjs/loader:1246:12)     
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)    
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)      
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.18.0


try{
    checkage(-1);
}catch(err){
    console.log( err.name,  err.message );
    
}