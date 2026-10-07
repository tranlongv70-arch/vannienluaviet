import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroHome } from './components/HeroHome';
import { FittingRoom } from './components/DressingRoom/FittingRoom';
import { CollectionsView } from './components/CollectionsView';
import { HeritageStories } from './components/HeritageStories';
import { CommunityGallery } from './components/CommunityGallery';
import { BespokeTailoring } from './components/BespokeTailoring';
import { QuickSearchModal } from './components/QuickSearchModal';
import { DressingState, CommunityPost, CostumeItem } from './types';
import { INITIAL_COMMUNITY_POSTS } from './data/community';
import { PRESET_OUTFITS } from './data/costumes';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeDressingState, setActiveDressingState] = useState<DressingState | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string>('story-evolution-aodai');
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);

  // Reset activeDressingState when navigating away from the studio tab
  useEffect(() => {
    if (currentTab !== 'studio') {
      setActiveDressingState(null);
    }
  }, [currentTab]);

  // Community posts state with localStorage caching
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(() => {
    try {
      const saved = localStorage.getItem('vietphuc_community_posts');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_COMMUNITY_POSTS;
  });

  // Saved user outfits state
  const [savedOutfits, setSavedOutfits] = useState<DressingState[]>(() => {
    try {
      const saved = localStorage.getItem('vietphuc_saved_outfits');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Synchronize localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vietphuc_community_posts', JSON.stringify(communityPosts));
    } catch (e) {
      console.error(e);
    }
  }, [communityPosts]);

  useEffect(() => {
    try {
      localStorage.setItem('vietphuc_saved_outfits', JSON.stringify(savedOutfits));
    } catch (e) {
      console.error(e);
    }
  }, [savedOutfits]);

  // Handler: Save to local collection
  const handleSaveOutfit = (outfit: DressingState) => {
    setSavedOutfits(prev => [outfit, ...prev]);
  };

  // Handler: Share to community
  const handleShareToCommunity = (outfit: DressingState, author: string, desc: string) => {
    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      title: outfit.name || 'Phối Y Phục Mới',
      author: author || 'Khách Yêu Cổ Phục',
      avatar: 'https://picsum.photos/id/64/150/150',
      date: 'Vừa xong',
      likes: 1,
      isLiked: true,
      shares: 0,
      commentsCount: 0,
      description: desc || 'Một góc nhìn mới về sự kết hợp phục trang truyền thống Việt Nam.',
      tags: ['Cổ Phục Việt', 'Tự Thiết Kế', 'Di Sản'],
      dressingState: outfit,
      comments: []
    };

    setCommunityPosts(prev => [newPost, ...prev]);
    setCurrentTab('community');
  };

  // Handler: Like community post
  const handleLikePost = (postId: string) => {
    setCommunityPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const isLiked = !post.isLiked;
        return {
          ...post,
          isLiked,
          likes: isLiked ? post.likes + 1 : Math.max(0, post.likes - 1)
        };
      }
      return post;
    }));
  };

  // Handler: Comment on post
  const handleAddComment = (postId: string, commentText: string, author: string) => {
    setCommunityPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: `c-${Date.now()}`,
          user: author || 'Khách Vãng Lai',
          avatar: 'https://picsum.photos/id/65/120/120',
          text: commentText,
          time: 'Vừa xong'
        };
        return {
          ...post,
          comments: [...post.comments, newComment],
          commentsCount: post.comments.length + 1
        };
      }
      return post;
    }));
  };

  // Handler: Select an outfit to dress in studio
  const handleSelectOutfitToDress = (state: DressingState) => {
    setActiveDressingState({ ...state });
    setCurrentTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Dress single item from archive
  const handleDressSingleItem = (item: CostumeItem) => {
    setActiveDressingState(prev => {
      const baseState: DressingState = prev ? { ...prev } : {
        gender: item.gender === 'male' ? 'male' : 'female',
        name: 'Tùy Chỉnh Cá Nhân',
        hairId: 'hair-bun-traditional',
        outerwearId: null,
        mainId: 'main-[#8B1E1E]',
        underlayerId: null,
        bottomId: 'bottom-[#FAF8F5]',
        headwearId: null,
        accessoryId: null,
        footwearId: 'foot-[#FAF8F5]',
        backgroundId: 'bg-hue-palace',
        colors: {
          outerwear: '#8B1E1E',
          main: '#8B1E1E',
          underlayer: '#FAF8F5',
          bottom: '#FAF8F5',
          headwear: '#E0AC3C'
        },
        pattern: 'lotus'
      };
      const next: DressingState = { ...baseState };
      switch (item.category) {
        case 'outerwear': next.outerwearId = item.id; break;
        case 'main': next.mainId = item.id; break;
        case 'underlayer': next.underlayerId = item.id; break;
        case 'bottom': next.bottomId = item.id; break;
        case 'headwear': next.headwearId = item.id; break;
        case 'hair': next.hairId = item.id; break;
        case 'accessory': next.accessoryId = item.id; break;
        case 'footwear': next.footwearId = item.id; break;
      }
      return next;
    });
    setCurrentTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Read article from home
  const handleReadArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentTab('stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#24211D] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          if (tab === 'studio') {
            setActiveDressingState(null); // Reset activeDressingState to null so entering from nav bar uses the clean base mannequins
          }
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsQuickSearchOpen(true)}
      />

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onSelectOutfitToDress={handleSelectOutfitToDress}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HeroHome
            onStartDressing={() => {
              setActiveDressingState(null); // Reset activeDressingState to null so generic start button starts with clean base mannequins
              setCurrentTab('studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCollections={() => {
              setCurrentTab('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReadArticle={handleReadArticle}
            onSelectOutfitToDress={handleSelectOutfitToDress}
            onDressSingleItem={handleDressSingleItem}
          />
        )}

        {currentTab === 'studio' && (
          <FittingRoom
            initialState={activeDressingState || undefined}
            onSaveOutfit={handleSaveOutfit}
            onShareToCommunity={handleShareToCommunity}
          />
        )}

        {currentTab === 'collections' && (
          <CollectionsView
            onSelectOutfitToDress={handleSelectOutfitToDress}
          />
        )}

        {currentTab === 'stories' && (
          <HeritageStories
            initialArticleId={selectedArticleId}
            onGoToStudio={() => {
              setCurrentTab('studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'community' && (
          <CommunityGallery
            posts={communityPosts}
            onLikePost={handleLikePost}
            onAddComment={handleAddComment}
            onDressCommunityOutfit={handleSelectOutfitToDress}
            onOpenStudio={() => {
              setCurrentTab('studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'tailoring' && (
          <BespokeTailoring />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
