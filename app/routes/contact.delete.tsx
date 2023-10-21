import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const loader = async ({ request }: { request: Request }) => {

    try {
        const url = new URL(request.url);
        const search = new URLSearchParams(url.search);

        const id = Number(search.get("id"));

        if (id) {
            await db.contact.delete({ where: { id: id } });
            return redirect('/contact');
        } 

    } catch (err) {
        console.error(err);
        throw err;
    }
};

export function ErrorBoundary() {
  return (
    <div className="error-container">
      I did a whoopsies.
    </div>
  );
}
