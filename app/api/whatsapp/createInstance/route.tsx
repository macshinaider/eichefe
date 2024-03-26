export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log(JSON.stringify(body))
    } catch (error) {
        return Response.json("error")
        
    }

}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
