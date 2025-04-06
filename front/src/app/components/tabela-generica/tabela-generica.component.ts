import { Component, Input, TemplateRef } from '@angular/core';
import { AcoesTabelaGenerica } from '../../types/dadosTabelaGenerica.interface';

@Component({
  selector: 'app-tabela-generica',
  imports: [],
  templateUrl: './tabela-generica.component.html',
})
export class TabelaGenericaComponent {
  @Input() dados: any[] = [];
  @Input() colunas: string[] = [];
  @Input() chaves: string[] = [];
  @Input() acoes: AcoesTabelaGenerica[] = [];

}
