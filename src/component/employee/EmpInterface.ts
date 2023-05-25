export interface EmployeeInter{
    id: string;
    FirstName: string;
    LastName: string;
    Email: string

}
 export const EmployeeLists: EmployeeInter[] = [
    {
        id: new Date().toJSON().toString(),
        FirstName: "lea",
        LastName: "didi",
        Email: "lea12@gmail.com",

    },
];
export enum enumPage{
    list,
    add,
};