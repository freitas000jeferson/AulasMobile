export interface Metadata {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export interface Pagination<T extends object> {
  meta: Metadata;
  data: T[];
}
