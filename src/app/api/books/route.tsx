import books from "@/app/api/db";

export async function GET() {
    return Response.json({message: 'Hello, World from Backend!'});
}

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);
    return Response.json(books);
}