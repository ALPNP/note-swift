import {MdPaginatorIntl} from "@angular/material";

const rangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
        return `0 de ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = (startIndex < length) ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} из ${length}`;
};

export function  customMdPaginatorIntl(): MdPaginatorIntl {
    const pagIntl = new MdPaginatorIntl();
    pagIntl.itemsPerPageLabel = 'Количество элементов на странице:';
    pagIntl.nextPageLabel = 'Следующая страница';
    pagIntl.previousPageLabel = 'Предыдущая страница';
    pagIntl.getRangeLabel = rangeLabel;
    return pagIntl;
}
