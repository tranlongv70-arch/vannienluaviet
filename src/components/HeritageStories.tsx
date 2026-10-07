import React, { useState, useEffect } from 'react';
import { HERITAGE_ARTICLES } from '../data/stories';
import { HeritageArticle } from '../types';
import { BookOpen, Clock, MapPin, Feather, Sparkles, ChevronRight, Share2 } from 'lucide-react';
import { HeritageImage } from './common/HeritageImage';

interface HeritageStoriesProps {
  initialArticleId?: string;
  onGoToStudio: () => void;
}

export const HeritageStories: React.FC<HeritageStoriesProps> = ({
  initialArticleId,
  onGoToStudio,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialArticleId || HERITAGE_ARTICLES[0].id
  );

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
    }
  }, [initialArticleId]);

  const currentArticle = HERITAGE_ARTICLES.find(a => a.id === selectedArticleId) || HERITAGE_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Editorial Header Ribbon */}
      <div className="border-b border-stone-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="text-[11px] tracking-widest uppercase font-mono text-stone-500">
          Chuyên San Nghiên Cứu Văn Hóa & Y Phục Việt · Tập San I
        </div>
        <div className="text-xs text-stone-500 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-700" />
          <span>Thời gian đọc: {currentArticle.readTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Article Selector / TOC (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-3">
            Mục Lục Chuyên Khảo
          </h2>
          {HERITAGE_ARTICLES.map((article, idx) => {
            const isSelected = article.id === currentArticle.id;
            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#8B1E1E] bg-[#FAF9F5] ring-2 ring-[#8B1E1E]/20 shadow-sm'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>0{idx + 1} / CHUYÊN ĐỀ</span>
                  <span>{article.category}</span>
                </div>
                <h3 className={`text-sm font-serif-royal font-bold mt-1 ${
                  isSelected ? 'text-[#8B1E1E]' : 'text-stone-900'
                }`}>
                  {article.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            );
          })}

          {/* Quick Studio Callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#8B1E1E] to-[#5C1515] text-white shadow-lg mt-6">
            <Sparkles className="w-5 h-5 text-amber-300 mb-2" />
            <h4 className="text-sm font-serif-royal font-bold">
              Thử Nghiệm Y Phục Trong Không Gian Ảo
            </h4>
            <p className="text-xs text-amber-100/80 mt-1">
              Ứng dụng các quy tắc lịch sử trên vào nhân vật mô phỏng để cảm nhận trọn vẹn bản sắc.
            </p>
            <button
              onClick={onGoToStudio}
              className="mt-3 w-full py-2 bg-white text-[#8B1E1E] rounded-xl text-xs font-semibold hover:bg-stone-100 transition-colors shadow-sm"
            >
              Mở phòng phối đồ →
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Essay View (8 cols) */}
        <article className="lg:col-span-8 bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Article Header */}
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-1">
              {currentArticle.category} · {currentArticle.era}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-royal font-bold text-stone-900 tracking-tight leading-tight">
              {currentArticle.title}
            </h1>
            <p className="text-sm text-stone-500 mt-2 font-medium">
              {currentArticle.subtitle}
            </p>
          </div>

          {/* Featured Hero Visual */}
          {currentArticle.imageUrl && (
            <div className="w-full h-80 rounded-2xl overflow-hidden mb-8 border border-stone-200 shadow-inner">
              <HeritageImage
                src={currentArticle.imageUrl}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Opening Paragraph with Drop Cap (Editorial Architecture) */}
          <div className="max-w-prose space-y-5 text-stone-800 text-sm sm:text-base leading-relaxed">
            {currentArticle.contentParagraphs.map((para, index) => {
              if (index === 0) {
                return (
                  <p key={index} className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#8B1E1E] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    {para}
                  </p>
                );
              }
              return <p key={index}>{para}</p>;
            })}
          </div>

          {/* Pull Quote */}
          {currentArticle.quote && (
            <div className="my-8 py-6 px-6 border-l-4 border-[#8B1E1E] bg-[#FAF9F5] rounded-r-2xl">
              <blockquote className="text-base sm:text-lg font-serif-royal italic text-stone-800 leading-relaxed">
                "{currentArticle.quote}"
              </blockquote>
              <div className="text-xs text-stone-500 font-medium mt-2">
                — {currentArticle.quoteAuthor}
              </div>
            </div>
          )}

          {/* Symbolism Breakdown Table / List */}
          {currentArticle.symbolismKeypoints && (
            <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded-2xl">
              <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-4 flex items-center gap-2">
                <Feather className="w-4 h-4" />
                <span>Giải Mã Biểu Tượng & Triết Lý Y Phục</span>
              </h3>
              <div className="space-y-3">
                {currentArticle.symbolismKeypoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs">
                    <span className="font-semibold text-stone-900 min-w-36 shrink-0">
                      • {point.element}:
                    </span>
                    <span className="text-stone-600 leading-relaxed">
                      {point.meaning}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Craft Villages Provenance */}
          {currentArticle.craftVillages && (
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
              <div className="flex items-center gap-1.5 flex-wrap">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                <span className="font-medium text-stone-700">Làng nghề lưu giữ:</span>
                <span>{currentArticle.craftVillages.join(' · ')}</span>
              </div>

              <span className="italic">Nguồn: Viện Nghiên Cứu Di Sản & Bảo Tàng Cố Đô</span>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};
