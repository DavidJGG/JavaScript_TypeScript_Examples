class CalcResponse {
    private _result: number;
    constructor(result: number){
        this._result = result;
    }

    public get result(): number{
        return this._result;
    }    
}

export default CalcResponse;