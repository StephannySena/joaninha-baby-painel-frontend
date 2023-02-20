import { Component, OnInit, ViewChild } from '@angular/core';
import { Cadastro } from '../interface/cadastro.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  @ViewChild('editModal') editModal: any;
  @ViewChild('deleteModal') deleteModal: any;

  public mockCadastros: Cadastro[] = [
    {
      id: '1',
      email: 'ste@teste.com',
      dataCadastro: '19/02/2023',
      usouCupom: false,
      newsletters: []
    },
    {
      id: '2',
      email: 'teste@teste.com',
      dataCadastro: '14/02/2023',
      usouCupom: true,
      newsletters: []
    },
    {
      id: '3',
      email: 'aefoklnfl@teste.com',
      dataCadastro: '22/05/2022',
      usouCupom: true,
      newsletters: []
    },
  ];

  public dropdownList: any = [
    { item_id: 1, item_text: 'Fem 1 a 3' },
    { item_id: 2, item_text: 'Fem 4 a 6' },
    { item_id: 3, item_text: 'Fem > 8' },
    { item_id: 4, item_text: 'Fem RN P M G' },
    { item_id: 5, item_text: 'Masc 1 a 3' },
    { item_id: 6, item_text: 'Masc 4 a 6' },
    { item_id: 7, item_text: 'Masc > 8' },
    { item_id: 8, item_text: 'Masc RN P M G' },
  ];

  public dropdownSettings: any = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Selecionar Todos',
    unSelectAllText: 'Remover Todos',
    searchPlaceholderText: 'Pesquisar',
    itemsShowLimit: 4,
    allowSearchFilter: true
  };

  public selectedItems: any = [];

  public showSuccessSaveMsg: boolean = false;
  
  public editMsg: String = 'Edição salva com sucesso!';
  public deleteMsg: String = '';
  
  public formCadastro: FormGroup = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    email: new FormControl(''),
    dataCadastro: new FormControl({value: '', disabled: true}),
    usouCupom: new FormControl({value: false, disabled: false}),
  })
  
  public colsTable = ['Id', 'E-mail', 'Data Cadastro', 'Usou Cupom?'];
  
  constructor(public modalService: NgbModal) { }

  public clickEdit(cad: any) {
    this.formCadastro.patchValue(cad);
    this.openModal(this.editModal); 
  }
  
  public clickSalvar() {
    console.log('clickSalvar', this.formCadastro.value);
    this.showSuccessSaveMsg = true;

    setTimeout(() => {
      this.showSuccessSaveMsg = false;
    }, 1000);

    
  } 
  
  public clickDelete(cad: any) {
    this.deleteMsg = `Tem certeza que deseja deletar o cadastro: ${cad.email}?`;
    this.openModal(this.deleteModal)
    console.log('clickDelete', cad);
    
  }
  
  public openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
  

  public onItemSelect(item: any) {
    this.selectedItems.push(item)
    console.log('onItemSelect' ,  this.selectedItems)
  }

  public onSelectAll(items: any) {
    this.selectedItems = items;
    console.log('onSelectAll', this.selectedItems);
  }
  public onDeSelectAll() {
    this.selectedItems = [];
    console.log('onDeSelectAll', this.selectedItems);
  }

  public onItemDeSelect(item: any) {
    this.selectedItems = this.selectedItems.filter((deselected: any) => deselected.item_id !== item.item_id)
    console.log(this.selectedItems);
  }

  ngOnInit() {}
}
