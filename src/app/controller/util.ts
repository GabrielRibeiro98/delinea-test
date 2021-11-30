export class Util {

  static pushErrorMsg(error: any): any {
        try {
            return [{severity: 'error', summary: error, life: 60000}]
        } catch (e) {
            return [{severity: 'error', summary: JSON.stringify(error), life: 60000}]
        }
    }

    static pushSuccessMsg(msg: any): any {
        try {//sticky: true
            return [{severity: 'success', summary: msg, life: 60000}]
        } catch (e) {
            return [{severity: 'success', summary: JSON.stringify(msg), life: 60000 }]//sticky: true
        }
    }
}
