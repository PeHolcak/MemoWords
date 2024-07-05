import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json(
    {
      data: [
        {
          component: 'SimpleBanner',
          title: 'Uč se nová slovíčka',
          description:
            'vitae placerat pede sem sit amet enim. Integer vulputate sem a nibh rutrum consequat. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Etiam quis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis gravida nulla. Aenean fermentum risus id tortor. Duis viverra diam non justo. Etiam neque.',
          actionButtons: [
            {
              buttonName: 'Register',
              link: '/entry',
              variant: 'contained'
            },
            {
              buttonName: 'Login',
              link: '/entry',
              variant: 'outlined'
            }
          ]
        }
      ]
    },
    { status: 200 }
  );
}
