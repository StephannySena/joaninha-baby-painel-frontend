import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-envio-emails',
  templateUrl: './envio-emails.component.html',
  styleUrls: ['./envio-emails.component.css']
})
export class EnvioEmailsComponent {

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

  public qntItensAdd: number = 0;

  public itensAdd: any = [];

  public formEmails: FormGroup = new FormGroup({
    titulo: new FormControl({value: '', disabled: false}),
    valor: new FormControl({value: '', disabled: false}),
    link: new FormControl({value: '', disabled: false}),
    img: new FormControl({value: '', disabled: false}),


  })

  public addProduto() {
    if(this.qntItensAdd < 3) {
      this.itensAdd.push(this.formEmails.value);
      this.qntItensAdd++;
    }     
    console.log(this.itensAdd, this.qntItensAdd);
    this.formEmails.reset();
  }

  public onItemSelect(item: any) {
    this.selectedItems.push(item)
    console.log('onItemSelect' ,  this.selectedItems)
  }

  public onSelectAll(itens: any) {
    this.selectedItems = itens;
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

}
