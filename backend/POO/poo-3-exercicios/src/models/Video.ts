export class Video {
    constructor(
      private id: string,
      private title: string,
      private duration: number,
      private uploadAt: string
    ) {}
  
    get _id(): string {
      return this.id;
    }
  
    get _title(): string {
      return this.title;
    }
  
    get _duration(): number {
      return this.duration;
    }
  
    get _uploadAt(): string {
      return this.uploadAt;
    }
  
    set _id(value: string) {
      this.id = value;
    }
  
    set _title(value: string) {
      this.title = value;
    }
  
    set _duration(value: number) {
      this.duration = value;
    }
  
    set _uploadAt(value: string) {
      this.uploadAt = value;
    }
  }
;