// Project Setup

// installing package 

// Setup the layout page that can be share with all the component in  the project and also add reactbits.dev UI to make  a light green sopt light backgrounf and then wrap the {children} in the main folder !

// Then we make a section to use  page.tsx file to make explore button and other feature also make the Lightrays feature absolute so that it can't distrub any other component and there position  








/* Note-1 */

```typescript

🧠 Note-1 (Corrected & Polished)

In development mode, you can see code changes reflected instantly without reloading the entire page — thanks to HMR (Hot Module Replacement).

In Next.js, the Next.js HMR cache helps retain and update specific parts of the React component tree (DOM) instead of re-rendering the whole application. This makes the development experience much smoother and faster.

For example, imagine you’re testing a premium API endpoint with a limited request quota. Without HMR, every small code edit would trigger a full page reload, repeatedly calling the API and exhausting your quota.
HMR prevents this by updating only the changed components in memory — keeping the rest of the app state intact — so you can modify your code frequently without losing context or wasting network calls.

By default, Next.js enables HMR caching in development mode to ensure a seamless and efficient developer experience.

```


/* Note-2 */

```javascript


 We are using Reactbit:-https://reactbits.dev/ for using the Frontendlibrary to apply some good UI in our codebase 

```



/* Note-3 */

```

Wen you see something that is spread across diff pages in Next.js then we will need to put  it in the layout.tsx to spread across the page


```



/* Note-4*/

```javascript


// Check the code Below and notice one things always try to write A reusable component that can be higly customizable 


interface Props{
    image:string,
    title:string,
    slug:string,
    location:string,
    date:string,
    time:string

}


const EventCard = ({title,image,slug,location,date,time}:Props) => {
  return (
   <Link href={`/events/${slug}`} id='event-card'>

      <Image src={image} alt={title} width={410} height={300} className='poster' />
      <div className='flex flex-row gap-2'>
          <Image src="/icons/pin.svg" alt='location' width={14} height={14}/>
          <p>{location}</p>

      </div>

      <p className='title'>{title}</p>

      <div className='datetime'>
                <div>
                    <Image src='/icons/calendar.svg' alt='location' width={14} height={14} />
                    <p>{date}</p>
                </div>

                 <div>
                    <Image src='/icons/clock.svg' alt='time' width={14} height={14} />
                    <p>{time}</p>
                </div>
      </div>

   
   </Link>
  )
}

export default EventCard



```



// From tomorrow :- Implementing Posthog :- https://youtu.be/I1V9YWqRIeI?t=6087