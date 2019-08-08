export interface Noticeboard {
    id: number;
    issueDate: Date;
    expiryDate: Date;
    title: string;
    noticeInformation: string;
    approved: boolean;
}
