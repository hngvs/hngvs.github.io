<script context="module">
    import faunadb from 'faunadb';

    const q = faunadb.query;

    const client = new faunadb.Client({
        secret: 'fnAErv5mr5AARqeqa-1KWldzrX0mCGvMXoSEK4EO',
        domain: 'db.us.fauna.com',
        port: 443,
        scheme: 'https',
    })

    export async function load({url, fetch}) {

        const data = await client.query(
            q.Collection('Scores')
        )
        console.log('data: ', JSON.stringify(data, null, 2))

        // q.Ref(q.Collection('Scores'), '1')

        // const [{ articles, pages }, { tags }] = await Promise.all([
        //     fetch(`/articles.json${url.search}`, { credentials: 'include' }).then((r) => r.json()),
        //     fetch('/tags.json').then((r) => r.json())
        // ]);

        return {
            props: {}
        };
    }
</script>

<script>
    import NetInfo from "../markdown/info.md"
    import NetScript from "../markdown/script.md"
</script>
<div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 print:p-0.5">
        <div class="text-center">
            <p class="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl print:text-2xl">
                Henderson
                Nevada Green Valley Stake Emergency Communication Net</p>
        </div>
        <div class="text-left">
            <div class="page-break">
                <NetInfo/>
            </div>
            <NetScript/>
        </div>
    </div>
</div>

