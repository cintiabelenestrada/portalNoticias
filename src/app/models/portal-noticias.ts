// export class PortalNoticias {
//   title: string;

//   constructor(title: string) {
//     this.title = title;
//   }
// }

export interface Seo {
  title: string;
  description: string;
}

export interface Noticias {
  seo: Seo;
}

export interface CreatedBy {
  id: string;
  name: string;
}

export interface Seo {
  slug: string;
  index: boolean;
  title: string;
  follow: boolean;
  keywords: string[];
  description: string;
  redirect_type: string | null;
}

export interface NoticiaOriginal {
  id: string;
  pathname: string;
  description: string | null;
  active: boolean;
  listPosition: number;
  title: string;
  initialTitle: string;
  subs: any[];
  media: any[];
  createdAt: string;
  createdBy: CreatedBy;
  seo: Seo;
  updatedAt: string;
  parentId: string | null;
}

export interface NoticiaTransformada {
  seo: {
    title: string;
    description: string;
  };
}
