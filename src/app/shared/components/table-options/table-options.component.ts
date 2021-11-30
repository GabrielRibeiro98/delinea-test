import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'

@Component({
    selector: 'app-table-options-table',
    templateUrl: './table-options.component.html',
    styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnChanges {

    ngOnChanges(changes: SimpleChanges): void {
        if(this.opcoes) this.options = this.opcoes
    }

    showOptions = false
    @Input() opcoes: any
    @Input() value: any
    @Input() direita = false

    _options

    set options(v) {
        if(this._options !== undefined && this._options !== null && Array.isArray(this._options) && this._options.length) return
        this._options = v.slice(0)
    }

    get options() {
        return this._options
    }


    constructor() {
    }

    get ulClasses() {
        let classes = {}
        if (this.showOptions) {
            classes['exibir-ul'] = true
        } else {
            classes['esconder-ul'] = true
        }
        return classes
    }

    get iconClasses() {
        let classes = {}
        if (this.showOptions) {
            classes['icon-opcoes-active'] = true
        } else {
            classes['icon-opcoes'] = true
        }
        return classes
    }

    exibirOpcoes(e) {
        this.showOptions = !this.showOptions
    }

    esconderOpcoes(e) {
        this.showOptions = false
    }

    opcaoClicada(e, opcao: any) {
        this.esconderOpcoes(e)
        opcao.command(this.value)
    }
}
