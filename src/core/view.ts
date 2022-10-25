export default abstract class View{
    private template: string;
    private renderTemplete : string;
    private container: HTMLElement;
    private htmlList : string[];
  
    constructor(containerId: string, templete: string){
      const containerElement = document.getElementById(containerId);
  
      if(!containerElement){
        throw "최상의 컨테이너가 없습니다."
      }
      this.container = containerElement;
      this.template = templete;
      this.renderTemplete = templete;
      this.htmlList = [];
    }
  
    //view updqte
    protected updateView(): void{
        this.container.innerHTML = this.renderTemplete;
        this.renderTemplete = this.template;
    };
  
    protected addHtml(htmlString: string): void{
      this.htmlList.push(htmlString);
    };
  
    protected getHtml(): string{
      const snapshot = this.htmlList.join('');
      this.clearHtmlList();
      return snapshot;
    };
  
    protected setTemplateData(key: string, value: string): void{
      this.renderTemplete = this.renderTemplete.replace(`{{__${key}__}}`, value)
    }
    
    protected clearHtmlList():void {
      this.htmlList = [];
    }
  
    abstract render(): void;
  }