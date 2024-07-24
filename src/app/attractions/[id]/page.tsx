
import React from 'react'
import { 
  Container, Card, CardContent, CardMedia, Typography
} from '@mui/material';
import { getDataById } from '@/app/contextApi/CallApi';
interface Params {
    id: string;
  }

export default async function page({ params }: { params: Params }) {

  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null
  }

  const id = params.id
  const data = await getDataById(id)
  console.log(data.length)
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      { data.length > 0 &&
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].name}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 400 }}
            image={data[0].coverimage}
            title={data[0].name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data[0].detail}
            </Typography>
          </CardContent>
        </Card>
      }
    </Container>
  )
}