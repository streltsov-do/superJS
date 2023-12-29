const goodLog = (data:any) => {
    
    const dataText=Object.keys({data})[0];
    console.log(`${dataText}=[${data}]`);
}

export {goodLog}