'use server'
export async function getDataById(id:string):Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions/${id}/`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  export async function getDataList(): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  