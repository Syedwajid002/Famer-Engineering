import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ZoomIn, X, Calendar, MapPin, Tag } from 'lucide-react';
import { projects } from "./data.ts"
import { useParams } from 'react-router-dom';
// Using the actual projects data structure from your file


const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleElements, setVisibleElements] = useState(new Set());
    const observerRef = useRef(null);

    // Mock useParams - replace with actual useParams hook
    const id = useParams();
    const project = projects.find((p) => p.id === id.id);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => setIsLoading(false), 600);

        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach((el) => {
            if (observerRef.current) {
                observerRef.current.observe(el);
            }
        });
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm">Loading project...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <h2 className="text-2xl font-medium text-gray-900 mb-2">Project Not Found</h2>
                    <p className="text-gray-600">The project you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .image-hover {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .image-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .image-hover:hover::before {
          opacity: 1;
        }

        .image-hover .zoom-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .image-hover:hover .zoom-icon {
          transform: translate(-50%, -50%) scale(1);
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        [data-animate] {
          opacity: 0;
        }

        .animate-visible {
          opacity: 1;
        }
      `}</style>

            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <div className="border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-6">
                        <div
                            data-animate="back-btn"
                            className={`${visibleElements.has('back-btn') ? 'animate-slide-in animate-visible' : ''}`}
                        >
                            <button className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Projects</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Header Section */}
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Project Info */}
                        <div className="lg:col-span-2">
                            <div
                                data-animate="title"
                                className={`${visibleElements.has('title') ? 'animate-fade-in animate-visible' : ''}`}
                            >
                                <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags?.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div
                            data-animate="details"
                            className={`${visibleElements.has('details') ? 'animate-fade-in animate-visible stagger-2' : ''}`}
                        >
                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                                        <p className="text-gray-900 font-medium">{project.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide">Year</p>
                                        <p className="text-gray-900 font-medium">{project.year}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Tag className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide">Category</p>
                                        <p className="text-gray-900 font-medium capitalize">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Details Content */}
                {project.details && (
                    <div className="max-w-6xl mx-auto px-6 pb-16">
                        <div
                            data-animate="content"
                            className={`${visibleElements.has('content') ? 'animate-fade-in animate-visible stagger-3' : ''}`}
                        >
                            <div className="border-t border-gray-100 pt-12">
                                <h2 className="text-2xl font-light text-gray-900 mb-8">Project Overview</h2>
                                <div className="prose prose-lg prose-gray max-w-none">
                                    {project.details.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="bg-gray-50 py-16">
                        <div className="max-w-6xl mx-auto px-6">
                            <div
                                data-animate="gallery-title"
                                className={`mb-12 ${visibleElements.has('gallery-title') ? 'animate-fade-in animate-visible' : ''}`}
                            >
                                <h2 className="text-2xl font-light text-gray-900 mb-2">Gallery</h2>
                                <div className="w-12 h-px bg-gray-300"></div>
                            </div>

                            <div
                                data-animate="gallery-grid"
                                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${visibleElements.has('gallery-grid') ? 'animate-fade-in animate-visible stagger-4' : ''}`}
                            >
                                {project.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative group image-hover bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer stagger-${(idx % 4) + 1}`}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} gallery ${idx + 1}`}
                                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="zoom-icon">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                                <ZoomIn className="w-5 h-5 text-gray-700" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Image Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                        <div className="relative max-w-5xl w-full">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Gallery image"
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectDetails;