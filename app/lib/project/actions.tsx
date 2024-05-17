import {database} from "@/app/ui/home/showcase/placeholders";
import {Project} from "@/app/lib/definitions";



export async function fetchProject(id: string): Promise<Project> {
    try {
        const project = database.getProjectById(id);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch project');
    }
}


// export async function fetchInvoiceById(id: string) {
//     try {
//         const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;
//
//         const invoice = data.rows.map((invoice) => ({
//             ...invoice,
//             // Convert amount from cents to dollars
//             amount: invoice.amount / 100,
//         }));
//
//         return invoice[0];
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch invoice.');
//     }
// }