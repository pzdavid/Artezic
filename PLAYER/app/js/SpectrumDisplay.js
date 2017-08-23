function SpectrumDisplay(rootElement, divElement)
{
    this.rootElement = rootElement;
    
    this.canvasRef = document.createElement("canvas");
    this.canvasRef.id = "editor-spectrum";
    divElement.appendChild(this.canvasRef);
    this.canvasRef.width = divElement.clientWidth;
    this.canvasRef.height = divElement.clientHeight;
    this.buffer = new Float32Array(this.canvasRef.width);
    this.min = -150;// decibel
    this.max = 0;// decibel
    this.range = this.max - this.min;
    this.minRange = this.canvasRef.height;
    
    
}