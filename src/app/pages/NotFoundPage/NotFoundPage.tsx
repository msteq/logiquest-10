import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="centered">
      <div className="stack-md">
        <h1>ページが見つかりません</h1>
        <p>お探しのページは存在しないか、移動または削除された可能性があります。</p>
        <p>
          <Link to="/">トップへ戻る</Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
