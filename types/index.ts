export interface Component {
    name: string;
    id: string;
    description: string | null;
    Category: string | null;
    Code: React.ReactNode;
}