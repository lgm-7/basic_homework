// 회원가입
router.post("/signup", async (req, res) => {
  // 회원가입 로직
});

// 로그인
router.post("/login", async (req, res) => {
  // 로그인 로직
});

// 로그아웃
router.post("/logout", (req, res) => {
  // 로그아웃 로직
});

//프로필 조회
router.get("/users/:userId", (req, res) => {
  //프로필 조회 로직
});

//프로필 수정
router.patch("/users/:userId", (req, res) => {
  //프로필 수정 로직
});

//회원 탈퇴
router.post("/users/:userId", (req, res) => {
  //회원 탈퇴 로직
});

//게시물 작성
router.post("/posts", (req, res) => {
  //게시물 작성 로직
});

//게시물 목록 조회
router.get("/posts", (req, res) => {
  //게시물 목록 조회 로직
});

//게시물 상세 조회
router.get("/posts/:postId", (req, res) => {
  //게시물 상세 조회 로직
});

//게시물 수정
router.patch("/posts/:postId", (req, res) => {
  //게시물 수정 로직
});

//게시물 삭제
router.delete("/posts/:postId", (req, res) => {
  //게시물 삭제 로직
});

//댓글 작성
router.post("/posts/:postId/comments", (req, res) => {
  //댓글 작성 로직
});

//댓글 목록 조회
router.get("/posts/:postId/comments", (req, res) => {
  //댓글 목록 조회 로직
});

//댓글 수정
router.patch("/posts/:postId/comments/:commnetsId", (req, res) => {
  //댓글 수정 로직
});

//댓글 삭제
router.delete("/posts/:postId/comments/:commnetsId", (req, res) => {
  //댓글 삭제 로직
});

//게시물 좋아요
router.post("/posts/:postId/likes", (req, res) => {
  //게시물 좋아요 로직
});

//게시물 좋아요 취소
router.delete("/posts/:postId/likes", (req, res) => {
  //게시물 좋아요 취소 로직
});

//사용자 팔로우
router.post("/users/:userId/follow", (req, res) => {
  //사용자 팔로우 로직
});

//사용자 언팔로우
router.delete("/users/:userId/follow", (req, res) => {
  //사용자 언팔로우 로직
});

//프로필 사진 업로드
router.post("//users/:userId/profile-image", (req, res) => {
  //프로필 사진 업로드 로직
});

//게시물 사진 업로드
router.post("/posts/:postId/post-image", (req, res) => {
  //게시물 사진 업로드 로직
});

export default router;
