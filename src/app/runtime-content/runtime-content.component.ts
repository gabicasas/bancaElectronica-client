import { 
  Component,
  ViewChild, ViewContainerRef, ComponentRef,
  Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'runtime-content',
  template: `
      <div>
          <h3>Template</h3>
          <div>
              <textarea rows="25" cols="250" [(ngModel)]="template"></textarea>
              <textarea rows="25" cols="25" [(ngModel)]="runtime"></textarea>
          </div>
          <button (click)="compileTemplate()">Compile</button>
          <h3>Output</h3>
          <div #container></div>
      </div>
  `
})


export class RuntimeContentComponent {

  template  = '<div>\nHola, {{data.nombre}}\n</div>';
  runtime = '{"data":{"nombre":"mundo"}}';
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private compiler: Compiler) {
  }

  compileTemplate() {

      const metadata = {
          selector: `runtime-component-sample`,
          template: this.template
      };
      //todo:  Cambiar el null del createComponentFactorySync por un RuntimeComponent que se al vuelo
      /**
       * La clase RuntimeComponent es añónima!! (Solo hay qye crear las variables de dentro, da igual el nombre de la clase)
       */
      //let factory = this.createComponentFactorySync(this.compiler, metadata, null);
    
      // let factory = this.createComponentFactorySync(this.compiler, metadata,  class { name: string = 'gabi'; age: number = 5; data: any = JSON.parse(this.runtime)});
      const factory = this.createComponentFactorySync(this.compiler, metadata,  this.runtime);
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
      this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, dataStr: any): ComponentFactory<any> {
      const cmpClass =  class RuntimeComponent { data: any = JSON.parse(dataStr).data };
      const decoratedCmp = Component(metadata)(cmpClass);

      @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
      class RuntimeComponentModule { }

      const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
      return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}

export class RuntimeData {
  data: any = null;

  constructor(datos: any) {
      this.data = datos;
  }
}
