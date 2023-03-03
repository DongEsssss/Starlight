export class Noticeboard{
    noTitle?:string;
    noContent?:string;
    noFile?:File;
    noWriter?:string;
    createDte?:Date;
}

export const notices = [
    {
         title : "test",
         content : "content",
         file : "O",
         writer : "test",
         create : Date
    },
    {
        title : "test2",
        content : "content2",
        file : "O",
        writer : "test2",
        create : "2022-12-13"
   }
]