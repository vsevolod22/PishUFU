type TYear = `${number}${number}${number}${number}`;
type TMonth = `${number}${number}`;
type TDay = `${number}${number}`;
type THours = `${number}${number}`;
type TMinutes = `${number}${number}`;
type TSeconds = `${number}${number}`;
type TOffset = `${number}${number}:${number}${number}`;

export type TDateISO =
  `${TYear}-${TMonth}-${TDay}T${THours}:${TMinutes}:${TSeconds}${TOffset}`;

export interface IGetEvents {
  data: {
    id: number;
    attributes: {
      descriptions: string;
      title: string;
      startDate: TDateISO;
      endDate: TDateISO;
      link: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface IGetNews {
  data: {
    id: number;
    attributes: {
      descriptions: string;
      title: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface IGetPrograms {
  data: {
    id: number;
    attributes: {
      Name: string;
      specialties: {
        data: {
          id: number;
          attributes: {
            depCode: string;
            depLink: string;
            partner?: string;
            depName: string;
          };
        }[];
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}
