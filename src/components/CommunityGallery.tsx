import React, { useState } from 'react';
import { CommunityPost, DressingState } from '../types';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Send, 
  Bookmark, 
  Check, 
  User, 
  Clock,
  Shirt
} from 'lucide-react';
import { COSTUME_ITEMS } from '../data/costumes';

interface CommunityGalleryProps {
  posts: CommunityPost[];
  onLikePost: (postId: string) => void;
  onAddComment: (postId: string, commentText: string, author: string) => void;
  onDressCommunityOutfit: (dressingState: DressingState) => void;
  onOpenStudio: () => void;
}

export const CommunityGallery: React.FC<CommunityGalleryProps> = ({
  posts,
  onLikePost,
  onAddComment,
  onDressCommunityOutfit,
  onOpenStudio,
}) => {
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [userName, setUserName] = useState('Khách Yêu Cổ Phục');
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const handleSendComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;
    onAddComment(postId, text, userName);
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  };

  const handleShare = (postId: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedPostId(postId);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Community Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
            Không Gian Giao Lưu · Lan Tỏa Nét Đẹp Cổ Phục
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif-royal font-bold text-stone-900 tracking-tight mt-1">
            Cộng Đồng Việt Phục
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
            Nơi những người yêu thời trang truyền thống, nhà thiết kế trẻ và khách du lịch chia sẻ những bản phối y phục độc đáo của mình.
          </p>
        </div>

        <button
          onClick={onOpenStudio}
          className="px-5 py-2.5 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md shrink-0 transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Tạo & Chia sẻ bản phối mới</span>
        </button>
      </div>

      {/* Posts Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => {
          const mainItem = COSTUME_ITEMS.find(c => c.id === post.dressingState.mainId);
          const outerItem = COSTUME_ITEMS.find(c => c.id === post.dressingState.outerwearId);
          const isCommenting = activeCommentPostId === post.id;

          return (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Author Bar */}
                <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 bg-[#8B1E1E]/10 flex items-center justify-center shrink-0">
                      {post.avatar ? (
                        <img
                          src={post.avatar}
                          alt={post.author}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                      <span className="text-xs font-bold text-[#8B1E1E]">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-stone-900">{post.author}</div>
                      <div className="text-[10px] text-stone-400">{post.date}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                    Bản phối #0{post.id.replace('post-', '')}
                  </span>
                </div>

                {/* Outfit Visual Preview Card */}
                <div className="p-5 bg-[#FAF9F5] border-b border-stone-100 relative">
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-inner">
                    <div className="text-xs font-serif-royal font-bold text-stone-900 mb-2">
                      {post.title}
                    </div>

                    {/* Outfit layers summary */}
                    <div className="space-y-1.5 text-[11px] text-stone-600">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: post.dressingState.colors.main }} />
                        <span className="text-stone-400">Áo chính:</span>
                        <span className="font-medium text-stone-800">{mainItem?.name || 'Áo Dài Ngũ Thân'}</span>
                      </div>
                      {outerItem && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: post.dressingState.colors.outerwear }} />
                          <span className="text-stone-400">Áo ngoài:</span>
                          <span className="font-medium text-stone-800">{outerItem.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description Text */}
                <div className="p-4">
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Interaction Bar & Comments */}
              <div className="p-4 pt-2 border-t border-stone-100 bg-stone-50/50">
                <div className="flex items-center justify-between mb-3 text-xs text-stone-500">
                  <div className="flex items-center gap-4">
                    {/* Like button */}
                    <button
                      onClick={() => onLikePost(post.id)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        post.isLiked ? 'text-red-600 font-semibold' : 'hover:text-red-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    {/* Comments toggle */}
                    <button
                      onClick={() => setActiveCommentPostId(isCommenting ? null : post.id)}
                      className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </button>

                    {/* Share */}
                    <button
                      onClick={() => handleShare(post.id)}
                      className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
                      title="Sao chép liên kết chia sẻ"
                    >
                      {copiedPostId === post.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                      <span>{copiedPostId === post.id ? 'Đã chép' : 'Chia sẻ'}</span>
                    </button>
                  </div>

                  {/* Load to Dressing Room Button */}
                  <button
                    onClick={() => onDressCommunityOutfit(post.dressingState)}
                    className="px-3 py-1 bg-[#8B1E1E] text-white rounded-lg text-xs font-medium hover:bg-[#721818] transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Phối mẫu này</span>
                  </button>
                </div>

                {/* Comment Drawer if active */}
                {isCommenting && (
                  <div className="mt-3 pt-3 border-t border-stone-200/80 space-y-2.5">
                    <div className="max-h-36 overflow-y-auto space-y-2 pr-1 text-xs">
                      {post.comments.map(c => (
                        <div key={c.id} className="p-2 rounded-lg bg-white border border-stone-200">
                          <div className="flex items-center justify-between text-[10px] text-stone-500 mb-0.5">
                            <span className="font-semibold text-stone-800">{c.user}</span>
                            <span>{c.time}</span>
                          </div>
                          <p className="text-stone-700 leading-snug">{c.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Comment Input */}
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendComment(post.id)}
                        placeholder="Viết bình luận văn minh..."
                        className="flex-1 px-3 py-1.5 rounded-lg border border-stone-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#8B1E1E]"
                      />
                      <button
                        onClick={() => handleSendComment(post.id)}
                        className="p-1.5 rounded-lg bg-[#8B1E1E] text-white hover:bg-[#721818] transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
