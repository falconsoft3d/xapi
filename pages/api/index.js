export default function handler(req, res) {
    res.status(200).json([{
                             url: '/api/people'
                             
                            }, 
                            {
                                url: '/api/posts' 
                            }]
                            )
  }