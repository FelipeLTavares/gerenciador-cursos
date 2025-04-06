import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-adicionar-alunos',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-adicionar-alunos.component.html',
  styleUrl: './modal-adicionar-alunos.component.css'
})
export class ModalAdicionarAlunosComponent {
  @Input() curso: any = null;
  @Input() alunos: any[] = [];

  @Output() confirmar = new EventEmitter<number>();
  @Output() fechar = new EventEmitter<void>();

  alunoSelecionadoId: number | null = null;

  onConfirmar() {
    if (this.alunoSelecionadoId) {
      this.confirmar.emit(this.alunoSelecionadoId);
    } else {
      alert('Selecione um aluno');
    }
  }
}
