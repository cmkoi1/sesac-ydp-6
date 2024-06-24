// const Comment = require('../model/Comments');
const { getDbComments } = require('../model/Comments');

exports.getMain = (req, res) => {
    res.render('index', { title: 'MVC패턴' });
}

exports.getComments = (req, res) => {
    res.render('comments', { comments: getDbComments() })//{comments : comments}
}

exports.getComment = (req, res) => {
    console.log(req.params); // 브라우저에서 엔터치면? 요청 { id: '1' }
    console.log(req.params.id); // '1'

    // 댓글 id : 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id;
    const dbComments = getDbComments(); // new
    console.log(dbComments[commentId - 1]);

    // 존재하지 않는 id에 대해서 요청할 때, 404처리
    if (!dbComments[commentId - 1]) { // !undefined => true
        return res.render('404');
    }

    res.render('comment', { comment: dbComments[commentId - 1] });
}